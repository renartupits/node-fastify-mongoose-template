import {Model, model, Schema} from 'mongoose'
import {UserModel} from './models/UserModel';

export const userSchema = new Schema<UserModel>({
  name: {type: String, required: true},
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  }
}, {
  id: true,
  timestamps: true
})

userSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (_, ret) => {
    ret.id = ret._id;
    delete ret._id;
  }
})

export const User: Model<UserModel> = model<UserModel>('User', userSchema)

