import {FastifyInstance} from 'fastify';
import {CreateUserJsonRequest, UpdateUserJsonRequest} from '../controllers/json/request/UserRequest';
import userController from '../controllers/userController';
import {createUserSchema, updateUserSchema} from './schemas/userSchema';

const userRoutes = async (server: FastifyInstance) => {
  server.post<{Body: CreateUserJsonRequest}>('/user', { schema: createUserSchema}, userController.create);
  server.get('/user/:id', userController.read);
  server.get('/users', userController.list);
  server.put<{Body: UpdateUserJsonRequest}>('/user/:id', { schema: updateUserSchema}, userController.update);
  server.delete('/user/:id', userController.remove);
}

export default userRoutes;
