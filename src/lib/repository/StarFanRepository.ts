import client from '../client';
import { PagenationRequest } from '../model';
import { GetFansResponse, GetStarsResponse, StarRequest, UnstarRequest } from '../model/StarFanModel';

class StarFanRepository {
  async star({ starId }: StarRequest): Promise<void> {
    return client.post(`/stars/${starId}`, null);
  }
  async unStar({ starId }: UnstarRequest): Promise<void> {
    return client.delete(`/stars/${starId}`);
  }
  async getStars({ memberId, page, size }: PagenationRequest & { memberId: number }): Promise<GetStarsResponse> {
    return client.get(`/${memberId}/stars?page=${page}&size=${size}`);
  }
  async getFans({ memberId, page, size }: PagenationRequest & { memberId: number }): Promise<GetFansResponse> {
    return client.get(`/${memberId}/fans?page=${page}&size=${size}`);
  }
}

export default new StarFanRepository();
