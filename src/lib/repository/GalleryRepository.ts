import client from '../client';
import {
  AddGalleryCommentRequest,
  AddGalleryCommentResponse,
  AddGalleryPostRequest,
  AddGalleryPostResponse,
  DeleteGalleryCommentRequest,
  DeleteGalleryPostRequest,
  EditGalleryPostRequest,
  EditGalleryPostResponse,
  GetGalleryAllPostReponse,
  GetGalleryAllPostRequest,
  GetGalleryPagablePostRequest,
  GetGalleryPagablePostResponse,
} from '../model';

class GalleryRepository {
  async getGalleryAllPost({ homepeeId }: GetGalleryAllPostRequest): Promise<GetGalleryAllPostReponse> {
    return client.get(`/${homepeeId}/album/posts`);
  }

  async getGalleryPagablePost({ homepeeId, pageParam }: GetGalleryPagablePostRequest): Promise<GetGalleryPagablePostResponse> {
    return client.get(`/${homepeeId}/album/posts?size=${pageParam.size}&page=${pageParam.page}`);
  }

  async addGalleryPost({ homepeeId, title, images }: AddGalleryPostRequest): Promise<AddGalleryPostResponse> {
    return client.post(`/${homepeeId}/album/posts`, {
      title,
      images,
    });
  }
  async editGalleryPost({ homepeeId, id, title, images }: EditGalleryPostRequest): Promise<EditGalleryPostResponse> {
    return client.put(`/${homepeeId}/album/posts`, {
      id,
      title,
      images,
    });
  }
  async deleteGalleryPost({ homepeeId, postId }: DeleteGalleryPostRequest): Promise<void> {
    return client.delete(`${homepeeId}/album/posts/${postId}`);
  }

  async addGalleryComment({ homepeeId, postId, memberId, content }: AddGalleryCommentRequest): Promise<AddGalleryCommentResponse> {
    return client.post(`${homepeeId}/posts/${postId}/comments`, {
      memberId,
      content,
    });
  }

  async deleteGalleryComment({ homepeeId, postId, commentId }: DeleteGalleryCommentRequest): Promise<void> {
    return client.delete(`${homepeeId}/posts/${postId}/comments/${commentId}`);
  }
}

export default new GalleryRepository();
