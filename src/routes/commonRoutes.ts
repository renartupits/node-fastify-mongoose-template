import {FastifyInstance} from 'fastify';

const commonRoutes = async (server: FastifyInstance) => {
  server.get('/', (request, reply) => {
    reply.send({});
  });

  server.setNotFoundHandler((request, reply) => {
    reply.status(404).send({
      statusCode: 404,
      message: 'Resource not found',
    });
  });
}

export default commonRoutes;
