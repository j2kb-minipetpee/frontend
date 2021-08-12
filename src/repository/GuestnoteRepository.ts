import axios from 'axios';
import { BASE_URL } from '../constants/index';

export interface GuestnoteModel {
  content: string;
  visible: boolean;
}

class GuestnoteRepository {
  async getGuestnotes() {
    return axios.get(`${BASE_URL}/homepee-id/guest/guest-notes`, {
      headers: {
        Authorization: 'token',
      },
    });
  }

  async addGuestnote({ content, visible }: GuestnoteModel) {
    return axios.post(
      `${BASE_URL}/homepee-id/guest/guest-notes`,
      {
        content,
        visible,
      },
      {
        headers: {
          Authorization: 'token',
        },
      },
    );
  }

  async editGuestnote({ content, visible }: GuestnoteModel) {
    return axios.put(
      `${BASE_URL}/homepee-id/guest/guest-notes/guest-note-id}`,
      {
        content,
        visible,
      },
      {
        headers: {
          Authorization: 'token',
        },
      },
    );
  }

  async deleteGuestnote() {
    return axios.delete(`${BASE_URL}/homepee-id/guest/guest-notes/guest-note-id}`, {
      headers: {
        Authorization: 'token',
      },
    });
  }
}
export default new GuestnoteRepository();
