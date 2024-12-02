export const createUserSchema = {
  body: {
    type: 'object',
    required: ['name', 'email'],
    properties: {
      name: {type: 'string'},
      email: {type: 'string'}
    }
  }
}

export const updateUserSchema = {
  body: {
    type: 'object',
    properties: {
      name: {type: 'string'},
      email: {type: 'string'}
    }
  }
}
