import axios from 'axios';
import { BASE_URL } from '../constants';

export interface GalleryPostModel {
  title: string;
  images: Array<string>;
  visible: boolean;
}

export interface GalleryCommentModel {
  content: string;
}

class GalleryRepository {
  async getGalleryPosts() {
    return axios.get(`${BASE_URL}/homepee-id/album/posts`, {
      headers: {
        Authorization: 'token',
      },
    });
  }
  async addGalleryPost({ title, images, visible }: GalleryPostModel) {
    return axios.post(
      `${BASE_URL}/homepee-id/album/posts`,
      {
        title,
        images,
        visible,
      },
      {
        headers: {
          Authroziation: 'token',
        },
      },
    );
  }
  async editGalleryPost({ title, images, visible }: GalleryPostModel) {
    return axios.put(
      `${BASE_URL}/homepee-id/album/posts`,
      {
        title,
        images,
        visible,
      },
      {
        headers: {
          Authroziation: 'token',
        },
      },
    );
  }
  async deleteGalleryPost() {
    return axios.delete(`${BASE_URL}/homepee-id/album/posts/post-id`, { headers: { Authorization: 'token' } });
  }
  async addGalleryComment({ content }: GalleryCommentModel) {
    return axios.post(`${BASE_URL}/homepee-id/album/posts/post-id/comments`, { content }, { headers: { Authorization: 'token' } });
  }
  async deleteGalleryComment() {
    return axios.delete(`${BASE_URL}/homepee-id/album/posts/post-id/comments`, {
      headers: {
        Authorization: 'token',
      },
    });
  }
}

export default new GalleryRepository();
