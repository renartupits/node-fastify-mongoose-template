import {FastifyReply, FastifyRequest} from 'fastify'
import {FastifyRequestWithBody} from '../interfaces/requests';
import userService from '../service/userService';
import {CreateUserJsonRequest, UpdateUserJsonRequest} from './json/request/UserRequest';

const create = async (request: FastifyRequestWithBody<CreateUserJsonRequest>, reply: FastifyReply) => {
  const payload = request.body
  const response = await userService.createUser(payload)

  reply.send(response);
};

const read = async (request: FastifyRequest, reply: FastifyReply) => {
  const { id } = request.params as { id: string };
  const response = await userService.getUser(id);

  reply.send(response);
};

const list = async (request: FastifyRequest, reply: FastifyReply) => {
  const response = await userService.listUsers();

  reply.send(response);
};

const update = async (request: FastifyRequestWithBody<UpdateUserJsonRequest>, reply: FastifyReply) => {
  const { id } = request.params as { id: string };
  const payload = request.body

  const response = await userService.updateUser(id, payload)
  reply.send(response);
};

const remove = async (request: FastifyRequest, reply: FastifyReply) => {
  const { id } = request.params as { id: string };

  await userService.deleteUser(id)
  reply.status(200);
};

export default {
  create,
  read,
  list,
  update,
  remove
}
