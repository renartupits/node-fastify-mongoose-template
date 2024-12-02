import {Document} from 'mongoose';

export interface UserModel extends Document {
  id: string;
  name: string;
  email: string;
}
