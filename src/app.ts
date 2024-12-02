import {FastifyInstance} from 'fastify';
import {errorHandler} from './middlewares/errorHandler';
import corsPlugin from './plugins/cors';
import mongoPlugin from './plugins/mongodb';
import commonRoutes from './routes/commonRoutes';
import userRoutes from './routes/userRoutes';

export const buildApp = (app: FastifyInstance) => {
  // Register plugins
  app.register(mongoPlugin);
  app.register(corsPlugin)
  app.register(errorHandler)

  // Register routes
  app.register(commonRoutes);
  app.register(userRoutes);
};
