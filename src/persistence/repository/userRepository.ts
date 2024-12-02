import {UpdateUserJsonRequest} from '../../controllers/json/request/UserRequest';
import {User} from '../app.schema';
import {deleteById, findAll, findById, updateById} from '../BaseRepository';
import {UserModel} from '../models/UserModel';

const findAllUsers = async (): Promise<UserModel[]> => {
  return findAll<UserModel>(User)
}

const findUserById = async (id: string): Promise<UserModel | null> => {
  return findById<UserModel>(User, id)
}

const updateUserById = async (id: string, user: UpdateUserJsonRequest): Promise<UserModel | null> => {
  return updateById<UserModel>(User, id, user)
}

const removeUserById = async (id: string): Promise<UserModel | null> => {
  return deleteById<UserModel>(User, id)
}

export default {
  findAllUsers,
  findUserById,
  updateUserById,
  removeUserById
}
