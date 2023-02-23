import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient(); // create only one instance of PrismaClient otherwise you will get a memory leak error (https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/connection-management)

const dbConnection = async () => {
  await prisma
    .$connect()
    .then(() => {
      console.log(`🍏 Connected to database.`);
    })
    .catch((e) => {
      console.error(`🍎 Error connecting to the db:-> ${e.message}`);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
};

export default dbConnection;
