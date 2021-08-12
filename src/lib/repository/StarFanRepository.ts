import client from '../client';
import { GetMyFansResponse, GetMyStarsResponse, StarRequest, UnstarRequest } from '../model/StarFanModel';

class StarFanRepository {
  async star({ starId }: StarRequest): Promise<void> {
    return client.post(`/stars/${starId}`, null);
  }
  async unStar({ starId }: UnstarRequest): Promise<void> {
    return client.delete(`/stars/${starId}`);
  }
  async getMyStar(): Promise<GetMyStarsResponse> {
    return client.get(`/stars`);
  }
  async getMyFan(): Promise<GetMyFansResponse> {
    return client.get(`/fans`);
  }
}

export default new StarFanRepository();
