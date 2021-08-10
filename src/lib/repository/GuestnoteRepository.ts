import client from '../client';
import { AddGuestnoteRequest, AddGuestnoteResponse, DeleteGuestnoteRequest, EditGuestnoteRequest, GetGuestnotesRequest, GetGuestnotesResponse } from '../model';

class GuestnoteRepository {
  async getGuestnotes({ homepeeId }: GetGuestnotesRequest): Promise<GetGuestnotesResponse> {
    return client.get(`/${homepeeId}/guest/guest-notes`);
  }

  async addGuestnote({ homepeeId, memberId, content, visible }: AddGuestnoteRequest): Promise<AddGuestnoteResponse> {
    return client.post(`/${homepeeId}/guest/guestnotes`, {
      memberId,
      content,
      visible,
    });
  }

  async editGuestnote({ homepeeId, guestnoteId, id, memberId, content, visible }: EditGuestnoteRequest): Promise<void> {
    return client.put(`${homepeeId}/guest/guest-notes/${guestnoteId}`, { id, memberId, content, visible });
  }

  async deleteGuestnote({ homepeeId, guestnoteId }: DeleteGuestnoteRequest): Promise<void> {
    return client.delete(`${homepeeId}/guest/guest-notes/${guestnoteId}`);
  }
}
export default new GuestnoteRepository();
