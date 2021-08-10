import axios from 'axios';
import {
  AddBoardCommentRequest,
  AddBoardCommentResponse,
  AddBoardPostRequest,
  AddBoardPostResponse,
  DeleteBoardPostRequset,
  DeleteCommentRequest,
  EditBoardPostRequest,
  GetBoardPostRequest,
  GetBoardPostResponse,
  GetBoardPostsRequest,
  GetBoardPostsResponse,
} from '../model';
import client from '../client';

class BoardRepository {
  async getBoardPosts({ homepeeId, size, page }: GetBoardPostsRequest): Promise<GetBoardPostsResponse> {
    return client.get(`/${homepeeId}/board/posts?size=${size}&page=${page}`);
  }

  async addBoardPost({ title, content, image, visible, homepeeId }: AddBoardPostRequest): Promise<AddBoardPostResponse> {
    return client.post(`/${homepeeId}/board/posts`, {
      title,
      content,
      image,
      visible,
    });
  }

  async getBoardPost({ homepeeId, postId }: GetBoardPostRequest): Promise<GetBoardPostResponse> {
    return client.get(`/${homepeeId}/board/posts/${postId}`);
  }

  async editBoardPost({ homepeeId, postId, id, title, content, image }: EditBoardPostRequest): Promise<EditBoardPostRequest> {
    return client.put(`/${homepeeId}/board/posts/${postId}}`, {
      id,
      title,
      content,
      image,
    });
  }
  async deleteBoardPost({ homepeeId, postId }: DeleteBoardPostRequset): Promise<void> {
    return client.delete(`/${homepeeId}/board/post/${postId}`);
  }

  async addBoardComment({ homepeeId, postId, memberId, content }: AddBoardCommentRequest): Promise<AddBoardCommentResponse> {
    return client.post(`/${homepeeId}/board/posts/${postId}/comments`, {
      memberId,
      content,
    });
  }
  async deleteBoardComment({ homepeeId, postId }: DeleteCommentRequest): Promise<void> {
    return client.delete(`/${homepeeId}/board/post/${postId}}`);
  }
}

export default new BoardRepository();
