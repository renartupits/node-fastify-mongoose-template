import { FastifyRequest as OriginalFastifyRequest } from 'fastify';

export interface FastifyRequestWithBody<T> extends OriginalFastifyRequest {
  body: T;
}
