import {FastifyPluginAsync} from 'fastify';
import mongoose from 'mongoose';
import fp from 'fastify-plugin';

const mongoPlugin: FastifyPluginAsync = async (app) => {
  app.log.info('DATABASE :: Trying to connect')
  const dbUrl = process.env.DATABASE_URL
  if (!dbUrl) {
    throw new Error('DATABASE_URL is not set')
  }

  mongoose.connect(dbUrl)
    .then(() => app.log.info('DATABASE :: Connected to the database'))
    .catch((err) => app.log.error('DATABASE :: Failed to connect to the database', err))
}

export default fp(mongoPlugin)
