import { AddCommentRequest, AddCommentResponse, DeleteCommentRequest, GetCommentRequest, GetCommentResponse } from '@/hooks/query/comment';
import client from '../client';

class CommentRepository {
  async addComment({ homepeeId, postId, member, content }: AddCommentRequest): Promise<AddCommentResponse> {
    return client.post(`/${homepeeId}/posts/${postId}/comments`, {
      member,
      content,
    });
  }
  async deleteComment({ homepeeId, postId, commentId }: DeleteCommentRequest): Promise<void> {
    return client.delete(`/${homepeeId}/posts/${postId}/comments/${commentId}`);
  }

  async getComment({ homepeeId, postId, pageParam }: GetCommentRequest): Promise<GetCommentResponse> {
    return client.get(`/${homepeeId}/posts/${postId}/comments?page=${pageParam.page}&size=${pageParam.size}`);
  }
}

export default new CommentRepository();
