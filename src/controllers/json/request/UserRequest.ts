export interface CreateUserJsonRequest {
  name: string;
  email: string;
}

export interface UpdateUserJsonRequest {
  name?: string;
  email?: string;
}
