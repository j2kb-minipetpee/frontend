import client from '../client';
import { EditSettingRequest, GetSettingRequest, GetSettingResponse } from '../model';

class SettingRepository {
  async getProfiles({ homepeeId }: GetSettingRequest): Promise<GetSettingResponse> {
    return client.get(`${homepeeId}/settings`);
  }
  async editProfiles({ homepeeId, profile, tabs }: EditSettingRequest): Promise<void> {
    return client.put(`${homepeeId}/settings`, {
      profile,
      tabs,
    });
  }
}

export default new SettingRepository();
