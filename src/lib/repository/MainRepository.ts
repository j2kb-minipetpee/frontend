import { GetPopularPostsResponse, SearchMembersResponse, SearchPostsResponse } from '../model';
import client from '../client';

class MainRepository {
  async getPopularPosts(): Promise<GetPopularPostsResponse> {
    return client.get('/popluar-posts');
  }

  async searchMembers(memberName: string): Promise<SearchMembersResponse> {
    return client.get(`/search-member?name=${memberName}`);
  }

  async searchPosts(postTitle: string): Promise<SearchPostsResponse> {
    return client.get(`/search-post?title=${postTitle}`);
  }
}

export default new MainRepository();
