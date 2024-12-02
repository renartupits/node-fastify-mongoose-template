import {CreateUserJsonRequest, UpdateUserJsonRequest} from '../controllers/json/request/UserRequest';
import {User} from '../persistence/app.schema';
import {save} from '../persistence/BaseRepository';
import {UserModel} from '../persistence/models/UserModel';
import userRepository from '../persistence/repository/userRepository';

const createUser = async (payload: CreateUserJsonRequest): Promise<UserModel> => {
  const newUser = new User({
    name: payload.name,
    email: payload.email
  })

  return await save<UserModel>(newUser)
};

const getUser = async (id: string): Promise<UserModel | null> => {
  return await userRepository.findUserById(id);
}

const listUsers = async () => {
  return await userRepository.findAllUsers()
}

const updateUser = async (id: string, payload: UpdateUserJsonRequest) => {
  return await userRepository.updateUserById(id, payload)
};

const deleteUser = async (id: string): Promise<void> => {
  await userRepository.removeUserById(id)
};

export default {
  createUser,
  getUser,
  listUsers,
  updateUser,
  deleteUser
}
