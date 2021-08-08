import { AddNeighborCommentRequest, AddNeighborCommentResponse, DeleteNeighborCommentRequest, EditNeighborCommentRequest, GetHomeResponse } from '../model';
import customAxios from '../utils/customAxios';

class HomeRepository {
  async getHomeData(homepeeId: number): Promise<GetHomeResponse> {
    return await customAxios.get(`${homepeeId}`);
  }

  async addNeighborComments({ userId, memberId, content }: AddNeighborCommentRequest): Promise<AddNeighborCommentResponse> {
    return await customAxios.post(`/${userId}/neighbor-comments`, { memberId, content });
  }

  async editNeighborComments({ userId, memberId, content }: EditNeighborCommentRequest): Promise<EditNeighborCommentRequest> {
    return await customAxios.put(`/${userId}/neighbor-comments`, { memberId, content });
  }

  async deleteNeighborComments({ userId, id }: DeleteNeighborCommentRequest): Promise<void> {
    return await customAxios.delete(`/${userId}/neighbor-comments/${id}`);
  }
}

export default new HomeRepository();
