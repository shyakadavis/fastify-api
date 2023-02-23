import { FastifyRequest, FastifyReply } from 'fastify';
import {
  createNewUserService,
  findAllAdminUsersService,
  findAllUsersService,
  findUserByNameService,
  findUserService,
  isEmailInUseService,
  updateUserService,
} from '../services';
import { createUserInput, updateUserInput } from '../middleware/validation';

/*
 * find all users handler
 */
export const getAllUsersHandler = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  const allUsers = await findAllUsersService();
  reply.code(200).send({ statusCode: 200, success: true, data: allUsers });
};

/*
 * find one user by email handler
 */
export const getUserHandler = async (
  request: FastifyRequest<{
    Querystring: {
      email: string;
    };
    Params: {
      email: string;
    };
  }>,
  reply: FastifyReply,
) => {
  //   const { email } = request.params;
  const { email } = request.query;
  const user = await findUserService(email);
  if (!user)
    reply
      .code(404)
      .send({ statusCode: 404, success: false, message: 'User not found' });
  reply.code(200).send({ statusCode: 200, success: true, data: user });
};

/*
 * find one user by name handler
 */
export const getUserByNameHandler = async (
  request: FastifyRequest<{
    Params: {
      name: string;
    };
  }>,
  reply: FastifyReply,
) => {
  try {
    const { name } = request.params;
    const user = await findUserByNameService(name);
    if (!user)
      reply
        .code(404)
        .send({ statusCode: 404, success: false, message: 'User not found' });
    reply.code(200).send({ statusCode: 200, success: true, data: user });
  } catch (error: any) {
    reply.code(500).send({
      statusCode: 500,
      success: false,
      message: 'Failed to find user by name',
      error: error.message,
    });
  }
};

/*
 *create a new user
 */

export const createUserHandler = async (
  //  define the shape of the Fastify request body
  request: FastifyRequest<{
    Body: createUserInput;
  }>,
  reply: FastifyReply,
) => {
  try {
    const { name, email, age, emailUpdates, role } = request.body;
    const isInUse = await isEmailInUseService(email);
    if (!isInUse) {
      const userToCreate = {
        name,
        email,
        age,
        role,
        userPreference: {
          create: {
            emailUpdates,
          },
        },
      };
      const newUser = await createNewUserService(userToCreate);
      reply.code(201).send({ statusCode: 201, success: true, data: newUser });
    } else {
      reply.code(409).send({
        statusCode: 409,
        success: false,
        message: 'Email already in use',
      });
    }
  } catch (error: any) {
    if (error.code === 'P2002') {
      reply.code(409).send({
        statusCode: 409,
        success: false,
        message: 'Try a different Email-Age combo. This one is already in use',
      });
    } else {
      reply.code(500).send({
        statusCode: 500,
        success: false,
        message: 'Failed to create a new user',
        error: error.message,
      });
    }
  }
};

/*
 * Update user data handler
 */
export const updateUserHandler = async (
  request: FastifyRequest<{ Body: updateUserInput; Params: { email: string } }>,
  reply: FastifyReply,
) => {
  try {
    // ! make sure to add a validation middleware to check for the logged in user
    const { email } = request.params;
    const { name, age, role, emailUpdates } = request.body;
    const updateData = {
      name,
      age,
      role,
      userPreference: {
        update: {
          emailUpdates,
        },
      },
    };
    const updatedUser = await updateUserService(email, updateData);
    reply.code(200).send({ statusCode: 200, success: true, data: updatedUser });
  } catch (error: any) {
    reply.code(500).send({
      statusCode: 500,
      success: false,
      message: 'Failed to update user',
      error: error.message,
    });
  }
};

/*
 * get all admin users handler
 */
export const getAllAdminUsersHandler = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const allAdminUsers = await findAllAdminUsersService(10); // * add pagination
    if (!allAdminUsers)
      reply
        .code(404)
        .send({
          statusCode: 404,
          success: false,
          message: 'No admin users found',
        });
    reply
      .code(200)
      .send({ statusCode: 200, success: true, data: allAdminUsers });
  } catch (error: any) {
    reply.code(500).send({
      statusCode: 500,
      success: false,
      message: 'Failed to get all admin users',
      error: error.message,
    });
  }
};
