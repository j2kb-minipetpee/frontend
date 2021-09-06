import client from '../client';
import {
  AddGuestNoteRequest,
  AddGuestNoteResponse,
  DeleteGuestNoteRequest,
  EditGuestNoteRequest,
  GetGuestNotesRequest,
  GetGuestNotesResponse,
  PagenationRequest,
} from '../model';

class GuestNoteRepository {
  async getGuestNotes({ homepeeId, size = 5, page = 0 }: GetGuestNotesRequest & PagenationRequest): Promise<GetGuestNotesResponse> {
    return client.get(`/${homepeeId}/guest/guest-notes?size=${size}&page=${page}`);
  }

  async addGuestNote({ homepeeId, memberId, content, visible }: AddGuestNoteRequest): Promise<AddGuestNoteResponse> {
    return client.post(`/${homepeeId}/guest/guest-notes`, {
      memberId,
      content,
      visible,
    });
  }

  async editGuestNote({ homepeeId, guestNoteId, memberId, content, visible }: EditGuestNoteRequest): Promise<void> {
    return client.put(`${homepeeId}/guest/guest-notes/${guestNoteId}`, { memberId, content, visible });
  }

  async deleteGuestNote({ homepeeId, guestNoteId }: DeleteGuestNoteRequest): Promise<void> {
    return client.delete(`${homepeeId}/guest/guest-notes/${guestNoteId}`);
  }
}
export default new GuestNoteRepository();
