import {Document, Model, UpdateQuery} from 'mongoose';


export const save = async <T extends Document>(doc: T): Promise<T> => {
  try {
    return await doc.save()
  } catch (error: any) {
    throw new Error(`Error saving document: ${error?.message}`)
  }
};

export const findById = async <T extends Document>(model: Model<T>, id: string): Promise<T | null> => {
  try {
    return await model.findById(id) as T | null
  } catch (error: any) {
    throw new Error(`Error fetching document: ${error?.message}`);
  }
}

export const findAll = async <T>(model: Model<T>, filter: Partial<T> = {}): Promise<T[]> => {
  try {
    const results = await model.find(filter);

    return results as T[];
  } catch (error: any) {
    throw new Error(`Error fetching documents: ${error?.message}`);
  }
}

export const updateById = async <T extends Document>(model: Model<T>, id: string, data: UpdateQuery<T>): Promise<T | null> => {
  try {
    return await model.findByIdAndUpdate(id, data, { new: true }) as T | null
  } catch (error: any) {
    throw new Error(`Error updating document: ${error?.message}`);
  }
}

export const deleteById = async <T extends Document>(model: Model<T>, id: string): Promise<T | null> => {
  try {
    return await model.findByIdAndDelete(id) as T | null
  } catch (error: any) {
    throw new Error(`Error deleting document: ${error?.message}`);
  }
}
