import client from '../client';
import { PagenationRequest } from '../model';
import { GetFansResponse, GetStarsResponse, StarRequest, UnstarRequest } from '../model/StarFanModel';

class StarFanRepository {
  async star({ starId }: StarRequest): Promise<void> {
    return client.post(`/star/${starId}`, null);
  }
  async unStar({ starId }: UnstarRequest): Promise<void> {
    return client.delete(`/star/${starId}`);
  }
  async getStars({ memberId, page, size }: PagenationRequest & { memberId: number }): Promise<GetStarsResponse> {
    return client.get(`/${memberId}/stars?page=${page}&size=${size}`);
  }
  async getFans({ memberId, page, size }: PagenationRequest & { memberId: number }): Promise<GetFansResponse> {
    return client.get(`/${memberId}/fans?page=${page}&size=${size}`);
  }
}

export default new StarFanRepository();
