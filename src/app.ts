import Fastify from 'fastify';
import { userRoutes } from './routes';
const fastify = Fastify({
  logger: false,
});

/*
 * health check
 */
fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

/*
 * register all routes
 */
fastify.register(userRoutes, { prefix: '/api/v1/user' }); // user routes

export default fastify;
