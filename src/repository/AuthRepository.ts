import { LoginRequest, SiginInRequest, ValidateEmailRequest } from '../model';
import customAxios from '../utils/customAxios';

class AuthRepository {
  async signUp({ email, password, name }: SiginInRequest): Promise<void> {
    return await customAxios.post(`/members`, {
      email,
      password,
      name,
    });
  }

  async validateEmail({ email }: ValidateEmailRequest): Promise<void> {
    return await customAxios.get(`/validate-email?email=${email}`, {
      headers: {
        Authorization: `Bearer ~~`,
      },
    });
  }

  async login({ email, password }: LoginRequest): Promise<void> {
    return await customAxios.post(`/login`, {
      email,
      password,
    });
  }

  async logout(): Promise<void> {
    return await customAxios.get(`/members`);
  }
}

export default new AuthRepository();
