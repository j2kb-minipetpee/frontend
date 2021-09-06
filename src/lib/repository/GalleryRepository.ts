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
  GetGalleryPostRequest,
  GetGalleryPostResponse,
} from '../model';

class GalleryRepository {
  async getGalleryPost({ homepeeId }: GetGalleryPostRequest): Promise<GetGalleryPostResponse> {
    return client.get(`/${homepeeId}/album/posts`);
  }
  async addGalleryPost({ homepeeId, title, images }: AddGalleryPostRequest): Promise<AddGalleryPostResponse> {
    return client.post(`/${homepeeId}/album/posts`, {
      title,
      images,
    });
  }
  async editGalleryPost({ homepeeId, id, title, image, visible }: EditGalleryPostRequest): Promise<EditGalleryPostResponse> {
    return client.put(`/${homepeeId}/album/posts`, {
      id,
      title,
      image,
      visible,
    });
  }
  async deleteGalleryPost({ homepeeId, postId }: DeleteGalleryPostRequest): Promise<void> {
    return client.delete(`${homepeeId}/album/posts/${postId}`);
  }
  async addGalleryComment({ homepeeId, postId, memberId, content }: AddGalleryCommentRequest): Promise<AddGalleryCommentResponse> {
    return client.post(`${homepeeId}/album/posts/${postId}`, {
      memberId,
      content,
    });
  }
  async deleteGalleryComment({ homepeeId, postId, commentId }: DeleteGalleryCommentRequest): Promise<void> {
    return client.delete(`${homepeeId}/album/posts/${postId}/comments/${commentId}`);
  }
}

export default new GalleryRepository();
