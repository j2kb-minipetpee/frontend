import axios from 'axios';
import { BASE_URL } from '../constants';

export interface BoardPostModel {
  title: string;
  content: string;
  image: {
    id: number;
    url: string;
  };
  visible: boolean;
}

export interface BoardCommentModel {
  content: string;
}

class BoardRepository {
  async getBoardPosts() {
    return axios.get(`${BASE_URL}/homepee-id/board/posts`, {
      params: {
        size: 10,
        page: 0,
      },
    });
  }
  async addBoardPost({ title, content, image, visible }: BoardPostModel) {
    return axios.post(
      `${BASE_URL}/homepee-id/board/posts`,
      {
        title,
        content,
        image,
        visible,
      },
      {
        headers: {
          Authorization: 'token',
        },
      },
    );
  }
  async getBoardPost() {
    return axios.get(`${BASE_URL}/homepee-id/board/posts/post-id`);
  }
  async editBoardPost({ title, content, image }: BoardPostModel) {
    return axios.put(
      `${BASE_URL}/homepee-id/board/posts/post-id`,
      {
        title,
        content,
        image,
      },
      {
        headers: {
          Authorization: 'token',
        },
      },
    );
  }
  async deleteBoardPost() {
    return axios.delete(`${BASE_URL}/homepee-id/board/posts/post-id`, {
      headers: {
        Authorization: 'token',
      },
    });
  }
  async addBoardComment({ content }: BoardCommentModel) {
    return axios.post(
      `${BASE_URL}/homepee-id/board/posts/post-id/comments/comment-id`,
      { content },
      {
        headers: {
          Authorization: 'token',
        },
      },
    );
  }
  async deleteBoardComment() {
    return axios.delete(`${BASE_URL}/homepee-id/board/posts/post-id/comments/comment-id`);
  }
}

export default new BoardRepository();
