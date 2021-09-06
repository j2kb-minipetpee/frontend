import { GetPopularPostsResponse, PagenationRequest, SearchMembersResponse, SearchPostsResponse } from '../model';
import client from '../client';

class MainRepository {
  async getPopularPosts({ size = 5, page = 0 }: PagenationRequest): Promise<GetPopularPostsResponse> {
    return client.get(`/popular-posts?size=${size}&page=${page}`);
  }

  async searchMembers({ memberName, size = 5, page = 0 }: { memberName?: string } & PagenationRequest): Promise<SearchMembersResponse> {
    return client.get(`/search-member?name=${memberName ?? ''}&size=${size}&page=${page}`);
  }

  async searchPosts({ postTitle, size = 5, page = 0 }: { postTitle: string } & PagenationRequest): Promise<SearchPostsResponse> {
    return client.get(`/search-post?title=${postTitle ?? ''}&size=${size}&page=${page}`);
  }
}

export default new MainRepository();
