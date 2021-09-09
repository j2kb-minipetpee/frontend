import client from '../client';
import {
  AddGuestBookRequest,
  AddGuestBookResponse,
  DeleteGuestBookRequest,
  EditGuestBookRequest,
  GetGuestBooksRequest,
  GetGuestBooksResponse,
  PagenationRequest,
} from '../model';

class GuestBookRepository {
  async getGuestBooks({ homepeeId, size = 5, page = 0 }: GetGuestBooksRequest & PagenationRequest): Promise<GetGuestBooksResponse> {
    return client.get(`/${homepeeId}/guest/guest-notes?size=${size}&page=${page}`);
  }

  async addGuestBook({ homepeeId, memberId, content, visible }: AddGuestBookRequest): Promise<AddGuestBookResponse> {
    return client.post(`/${homepeeId}/guest/guest-notes`, {
      memberId,
      content,
      visible,
    });
  }

  async editGuestBook({ homepeeId, guestBookId, memberId, content, visible }: EditGuestBookRequest): Promise<void> {
    return client.put(`${homepeeId}/guest/guest-notes/${guestBookId}`, { memberId, content, visible });
  }

  async deleteGuestBook({ homepeeId, guestBookId }: DeleteGuestBookRequest): Promise<void> {
    return client.delete(`${homepeeId}/guest/guest-notes/${guestBookId}`);
  }
}
export default new GuestBookRepository();
