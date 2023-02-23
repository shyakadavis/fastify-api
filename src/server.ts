import fastify from './app';
import dbConnection from './db/connect';

/*
 * Run the server!
 */
const start = async () => {
  await fastify
    .listen({ port: 3000 })
    .then((response) => {
      console.log(`🍏 Server listening at 👂 ${response}`);
    })
    .then(() => {
      dbConnection();
    })
    .catch((err) => {
      fastify.log.error(err);
      process.exit(1);
    });
};
start();
