import {config} from 'dotenv';
import Fastify from 'fastify';
import {buildApp} from './app';

const app = Fastify({ logger: true });

const start = async () => {
  config();

  try {
    buildApp(app);

    app.ready();
    await app.listen({ port: 3000 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
