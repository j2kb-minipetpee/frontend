import { LoginRequest, SiginInRequest, ValidateEmailRequest } from '../model';
import client from '../client';

class AuthRepository {
  async signUp({ email, password, name }: SiginInRequest): Promise<void> {
    return await client.post(`/members`, {
      email,
      password,
      name,
    });
  }

  async validateEmail({ email }: ValidateEmailRequest): Promise<void> {
    return await client.get(`/validate-email?email=${email}`, {
      headers: {
        Authorization: `Bearer ~~`,
      },
    });
  }

  async login({ email, password }: LoginRequest): Promise<void> {
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
