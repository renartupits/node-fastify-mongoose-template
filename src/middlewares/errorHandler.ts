import {FastifyInstance} from 'fastify';

export const errorHandler = (fastify: FastifyInstance) => {
  fastify.setErrorHandler((error, request, reply) => {
    fastify.log.error(error)

    // Other app errors

    return reply.status(500).send({
      statusCode: 500,
      message: 'Internal Server Error',
      error: error.message
    })
  })
};
