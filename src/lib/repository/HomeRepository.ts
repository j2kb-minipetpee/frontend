import {
  AddNeighborCommentRequest,
  AddNeighborCommentResponse,
  DeleteNeighborCommentRequest,
  EditNeighborCommentRequest,
  EditNeighborCommentResponse,
  GetHomeResponse,
} from '../model';
import client from '../client';

class HomeRepository {
  async getHomeData(homepeeId: number): Promise<GetHomeResponse> {
    return await client.get(`/${homepeeId}`);
  }

  async addNeighborComments({ userId, memberId, content }: AddNeighborCommentRequest): Promise<AddNeighborCommentResponse> {
    return await client.post(`/${userId}/neighbor-comments`, { memberId, content });
  }

  async editNeighborComments({ userId, memberId, content }: EditNeighborCommentRequest): Promise<EditNeighborCommentResponse> {
    return await client.put(`/${userId}/neighbor-comments`, { memberId, content });
  }

  async deleteNeighborComments({ userId, id }: DeleteNeighborCommentRequest): Promise<void> {
    return await client.delete(`/${userId}/neighbor-comments/${id}`);
  }
}

export default new HomeRepository();
