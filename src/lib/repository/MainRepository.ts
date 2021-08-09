import { GetPopularPostsResponse, GetSearchMemberResponse, GetSearchPostResponse } from '../model';
import client from '../client';

class MainRepository {
  async getPopularPosts(): Promise<GetPopularPostsResponse> {
    return client.get('/popluar-posts');
  }

  async searchMember(memberName: string): Promise<GetSearchMemberResponse> {
    return client.get(`/search-member?name=${memberName}`);
  }

  async searchPost(postTitle: string): Promise<GetSearchPostResponse> {
    return client.get(`/search-post?title=${postTitle}`);
  }
}

export default new MainRepository();
