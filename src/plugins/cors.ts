import { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';

const corsPlugin = async (fastify: FastifyInstance) => {
  await fastify.register(cors, {
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Range'],
    credentials: true,
  });
};

export default corsPlugin;
