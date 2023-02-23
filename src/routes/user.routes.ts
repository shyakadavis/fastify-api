import { FastifyInstance } from 'fastify';
import {
  createUserHandler,
  getAllAdminUsersHandler,
  getAllUsersHandler,
  getUserByNameHandler,
  getUserHandler,
  updateUserHandler,
} from '../controllers';

export const userRoutes = async (fastify: FastifyInstance) => {
  // health check
  fastify.get('/', async (request, reply) => {
    reply.send({ message: '👋 User 🧑‍🤝‍🧑' });
  });

  /*
   * Public routes
   */

  /*
   * Private / Protected routes
   */
  fastify.get('/all', getAllUsersHandler); //   get all users
  fastify.get('/admins', getAllAdminUsersHandler); // get all admin users
  fastify.get('/search', getUserHandler); // query search a user by email
  fastify.get('/find/:name', getUserByNameHandler); // params search a user by name
  fastify.post('/create', createUserHandler); // create a new user
  fastify.patch('/update/:email', updateUserHandler); // update a user
};
