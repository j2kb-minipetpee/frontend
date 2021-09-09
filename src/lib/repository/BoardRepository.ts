import axios from 'axios';
import {
  AddBoardCommentRequest,
  AddBoardCommentResponse,
  AddBoardPostRequest,
  AddBoardPostResponse,
  DeleteBoardCommentRequest,
  DeleteBoardPostRequset,
  EditBoardPostRequest,
  EditBoardPostResponse,
  GetBoardPagablePostsRequest,
  GetBoardPagablePostsResponse,
  GetBoardPostRequest,
  GetBoardPostResponse,
  GetBoardPostsRequest,
  GetBoardPostsResponse,
  GetBoardTargetPostRequest,
  GetBoardTargetPostResponse,
} from '../model';
import client from '../client';

class BoardRepository {
  async getBoardPosts({ homepeeId, pageParam }: GetBoardPagablePostsRequest): Promise<GetBoardPagablePostsResponse> {
    return client.get(`/${homepeeId}/board/posts?size=${pageParam.size}&page=${pageParam.page}`);
  }

  async getBoardPost({ homepeeId, postId }: GetBoardTargetPostRequest): Promise<GetBoardTargetPostResponse> {
    return client.get(`/${homepeeId}/board/posts/${postId}`);
  }

  async addBoardPost({ title, content, image, visible, homepeeId }: AddBoardPostRequest): Promise<AddBoardPostResponse> {
    return client.post(`/${homepeeId}/board/posts`, {
      title,
      content,
      image,
      visible,
    });
  }

  async editBoardPost({ homepeeId, postId, title, content, image }: EditBoardPostRequest): Promise<EditBoardPostResponse> {
    return client.put(`/${homepeeId}/board/posts/${postId}}`, {
      title,
      content,
      image,
    });
  }

  async deleteBoardPost({ homepeeId, postId }: DeleteBoardPostRequset): Promise<null> {
    return client.delete(`/${homepeeId}/board/posts/${postId}`);
  }

  async addBoardComment({ homepeeId, postId, memberId, content }: AddBoardCommentRequest): Promise<AddBoardCommentResponse> {
    return client.post(`/${homepeeId}/board/posts/${postId}/comments`, {
      memberId,
      content,
    });
  }
  async deleteBoardComment({ homepeeId, commentId }: DeleteBoardCommentRequest): Promise<void> {
    return client.delete(`/${homepeeId}/board/post/${commentId}}`);
  }
}

export default new BoardRepository();
