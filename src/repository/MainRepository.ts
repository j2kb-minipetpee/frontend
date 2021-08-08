import { GetPopularPostsResponse, GetSearchMemberResponse, GetSearchPostResponse } from '../model';
import customAxios from '../utils/customAxios';

class MainRepository {
  async getPopularPosts(): Promise<GetPopularPostsResponse> {
    return customAxios.get('/popluar-posts');
  }

  async searchMember(memberName: string): Promise<GetSearchMemberResponse> {
    return customAxios.get(`/search-member?name=${memberName}`);
  }

  async searchPost(postTitle: string): Promise<GetSearchPostResponse> {
    return customAxios.get(`/search-post?title=${postTitle}`);
  }
}

export default new MainRepository();
