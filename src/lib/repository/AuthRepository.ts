import { LoginRequest, LoginResponse, SignUpRequest, ValidateEmailRequest } from '../model';
import client from '../client';

class AuthRepository {
  async signUp({ email, password, name }: SignUpRequest): Promise<void> {
    return await client.post(`/members`, {
      email,
      password,
      name,
    });
  }

  async validateEmail({ email }: ValidateEmailRequest): Promise<void> {
    return await client.get(`/validate-email?email=${email}`);
  }

  async login({ email, password }: LoginRequest): Promise<LoginResponse> {
    return await client.post(`/login`, {
      email,
      password,
    });
  }

  async logout(): Promise<void> {
    return await client.get(`/members`);
  }
}

export default new AuthRepository();
