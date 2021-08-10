import axios from 'axios';
import { BASE_URL } from '../constants';

export interface SiginInModel {
  email: string;
  password: string;
  name: string;
}

class OnBoardingRepository {
  async signIn({ email, password, name }: SiginInModel) {
    return await axios.post(
      `${BASE_URL}/apis/members`,
      {
        email,
        password,
        name,
      },
      {
        headers: {
          Authorization: `Bearer ~~`,
        },
      },
    );
  }
}

export default new OnBoardingRepository();
