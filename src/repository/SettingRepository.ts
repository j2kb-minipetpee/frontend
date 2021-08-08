import axios from 'axios';
import { BASE_URL } from '../constants';

export interface ProfileModel {
  email: string;
  name: string;
  birthday: string;
  species: string;
  personality: string;
  gender: string;
  profileImageUrl: string;
  gateImageUrl: string;
}

export enum GalleryType {
  BOARD,
  ALBUM,
  GUEST,
}

export interface TabModel {
  id: number;
  homepeeId: number;
  type: GalleryType;
}

export interface ProfilesModel {
  profile: ProfileModel;
  tabs: TabModel;
}

class SettingRepository {
  async getProfiles() {
    return axios.get(`${BASE_URL}/homepee-id/settings`, {
      headers: {
        Authorization: 'token',
      },
    });
  }
  async editProfiles({ profile, tabs }: ProfilesModel) {
    return axios.put(
      `${BASE_URL}/homepee-id/settings/profile`,
      { profile, tabs },
      {
        headers: {
          Authorization: 'token',
        },
      },
    );
  }
}

export default new SettingRepository();
