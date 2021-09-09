import {
  AddFanCommentRequest,
  AddFanCommentResponse,
  DeleteFanCommentRequest,
  EditFanCommentRequest,
  EditFanCommentResponse,
  GetFanCommentsRequest,
  GetFanCommentsResponse,
  GetHomeResponse,
} from '../model';
import client from '../client';

class HomeRepository {
  async getHomeData(homepeeId: number): Promise<GetHomeResponse> {
    return await client.get(`/${homepeeId}`);
  }

  async getFanComments({ homepeeId, page, size }: GetFanCommentsRequest): Promise<GetFanCommentsResponse> {
    return await client.get(`/${homepeeId}/fan-comments?page=${page}&size=${size}`);
  }

  async addFanComments({ homepeeId, memberId, content }: AddFanCommentRequest): Promise<AddFanCommentResponse> {
    return await client.post(`/${homepeeId}/fan-comments`, { memberId, content });
  }

  async editFanComments({ homepeeId, memberId, content }: EditFanCommentRequest): Promise<EditFanCommentResponse> {
    return await client.put(`/${homepeeId}/fan-comments`, { memberId, content });
  }

  async deleteFanComments({ homepeeId, id }: DeleteFanCommentRequest): Promise<void> {
    return await client.delete(`/${homepeeId}/fan-comments/${id}`);
  }
}

export default new HomeRepository();
