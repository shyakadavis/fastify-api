import { prisma } from '../db/connect';
import { ICreateUser, IUpdateData } from '../interfaces';

/*
 * find all users service
 */
export const findAllUsersService = async () => {
  const allUsers = await prisma.user.findMany({
    select: {
      name: true,
      email: true,
      age: true,
      role: true,
      favouritePosts: {
        select: {
          title: true,
        },
      },
      userPreference: {
        select: {
          emailUpdates: true,
        },
      },
    },
  });
  return allUsers;
};

/*
 * 📷 create a new user service
 */
export const createNewUserService = async (user: ICreateUser) => {
  const newUser = await prisma.user.create({
    data: user,
  });
  return newUser;
};

/*
 * 🔎 find a user by email
 * 🔶 NOTE:
 * 1. findUnique only works if the "where" clause is finding an @unique field in your database
 */
export const findUserService = async (email: string) => {
  // find a user by email
  const userByEmail = await prisma.user.findUnique({
    where: {
      email: email,
    },
    include: {
      userPreference: {
        select: {
          emailUpdates: true,
        },
      },
    },
  });
  return userByEmail;
};

/*
 * find user by name
 */
export const findUserByNameService = async (name: string) => {
  const userByName = await prisma.user.findMany({
    where: {
      name: name,
    },
  });
  return userByName;
};

/*
 * 🔍 find all users who are admins (Notice the parameter of "how many" admins you want returned)
 */
export const findAllAdminUsersService = async (howMany: number) => {
  const allAdminUsers = await prisma.user.findMany({
    where: {
      role: 'ADMIN',
    },
    select: {
      name: true, // only return the name of the user
    },
    take: howMany, // this option is to paginate the results (https://www.prisma.io/docs/concepts/components/prisma-client/pagination)
    orderBy: {
      name: 'asc', // returns the results in ascending order by name
    },
  });
  return allAdminUsers;
};

/*
 * ♻️ update a user's information
 */
export const updateUserService = async (
  email: string,
  updateData: IUpdateData,
) => {
  const updatedUser = await prisma.user.update({
    where: {
      email: email,
    },
    data: updateData,
    // this option is to "include" the userPreference data in the response alongside the user data
    include: {
      userPreference: {
        select: {
          emailUpdates: true,
        },
      },
    },
  });
  return updatedUser;
};

/*
 * 🛑 delete one user
 */
export const deleteUserService = async (email: string) => {
  const deletedUser = await prisma.user.delete({
    where: {
      email: email,
    },
  });
  return deletedUser;
};

/*
 * delete a range of users
 */
export const deleteOverAgeUsersService = async () => {
  const deletedUsers = await prisma.user.deleteMany({
    where: {
      age: {
        gt: 60, // delete all users who are greater than 60 years old
      },
    },
  });
  return deletedUsers;
};

/*
 * is this email in use
 */
export const isEmailInUseService = async (email: string) => {
  const emailInUse = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  return !!emailInUse;
};
