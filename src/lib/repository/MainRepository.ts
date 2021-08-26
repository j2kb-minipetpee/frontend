import { GetPopularPostsResponse, SearchMembersResponse, SearchPostsResponse } from '../model';
import client from '../client';

class MainRepository {
  async getPopularPosts(): Promise<GetPopularPostsResponse> {
    return client.get('/popular-posts?size=5&page=0');
  }

  async searchMembers(memberName: string): Promise<SearchMembersResponse> {
    return client.get(`/search-member?name=${memberName}`);
  }

  async searchPosts(postTitle: string): Promise<SearchPostsResponse> {
    return client.get(`/search-post?title=${postTitle}`);
  }
}

export default new MainRepository();
