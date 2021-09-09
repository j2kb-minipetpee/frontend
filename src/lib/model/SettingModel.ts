import { Homepee, Profile } from './SharedModel';

export enum GalleryType {
  BOARD = 'BOARD',
  ALBUM = 'ALBUM',
  GUEST = 'GUEST',
}
export interface Tab {
  id: number;
  homepeeId: number;
  type: GalleryType;
  visible?: boolean;
}

export interface Profiles {
  profile: Profile;
  tabs: Tab[];
}

export interface GetSettingRequest {
  homepeeId: string;
}

export interface EditProfileRequest {
  homepeeId: string;
  profile: Profile;
  homepee: Homepee;
}

export interface EditProfileResponse {
  homepeeId: string;
  profile: Profile;
  homepee: Homepee;
}

export interface EditTabsRequest {
  homepeeId: string;
  tabs: Tab[];
}

export interface GetSettingResponse {
  profile: Profile;
  homepee: Homepee;
  tabs: Tab[];
}
