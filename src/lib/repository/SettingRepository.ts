import client from '../client';
import { EditSettingRequest, EditSettingResponse, EditTabsRequest, GetSettingRequest, GetSettingResponse } from '../model';

class SettingRepository {
  async getSettings({ homepeeId }: GetSettingRequest): Promise<GetSettingResponse> {
    return client.get(`${homepeeId}/settings`);
  }
  async editProfiles({ homepeeId, profile, tabs }: EditSettingRequest): Promise<EditSettingResponse> {
    return client.put(`${homepeeId}/settings`, {
      profile,
      tabs,
    });
  }

  async editTabs({ homepeeId, tabs }: EditTabsRequest): Promise<void> {
    return client.put(`${homepeeId}/settings/tabs`, {
      tabs,
    });
  }
}

export default new SettingRepository();
