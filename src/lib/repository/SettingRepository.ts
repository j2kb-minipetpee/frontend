import client from '../client';
import { EditProfileRequest, EditProfileResponse, EditTabsRequest, GetSettingRequest, GetSettingResponse } from '../model';

class SettingRepository {
  async getSettings({ homepeeId }: GetSettingRequest): Promise<GetSettingResponse> {
    return client.get(`${homepeeId}/settings`);
  }
  async editProfiles({ homepeeId, profile, homepee }: EditProfileRequest): Promise<EditProfileResponse> {
    return client.put(`${homepeeId}/settings/profile`, {
      profile,
      homepee,
    });
  }

  async editTabs({ homepeeId, tabs }: EditTabsRequest): Promise<void> {
    return client.put(`${homepeeId}/settings/tabs`, {
      tabs,
    });
  }
}

export default new SettingRepository();
