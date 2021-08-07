import axios from 'axios';
import { BASE_URL } from '../constants';

class StarFanRepository {
  async star() {
    return axios.post(
      `${BASE_URL}/stars/star-id`,
      {},
      {
        headers: {
          Authorization: 'token',
        },
      },
    );
  }
  async unStar() {
    return axios.delete(`${BASE_URL}/stars/star-id`, {
      headers: {
        Authorization: 'token',
      },
    });
  }
  async getMyStar() {
    return axios.get(`${BASE_URL}/stars`, {
      headers: {
        Authorization: 'token',
      },
    });
  }
  async getMyFan() {
    return axios.get(`${BASE_URL}/fans`, {
      headers: {
        Authorization: 'token',
      },
    });
  }
}

export default new StarFanRepository();
