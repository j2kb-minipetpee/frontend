import { Profile } from './SharedModel';

export enum GalleryType {
  BOARD,
  ALBUM,
  GUEST,
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

export interface EditSettingRequest {
  homepeeId: string;
  profile: Profile;
  tabs: Tab[];
}

export interface EditSettingResponse {
  homepeeId: string;
  profile: Profile;
  tabs: Tab[];
}

export interface EditTabsRequest {
  homepeeId: string;
  tabs: Tab[];
}

export interface GetSettingResponse {
  profile: Profile;
  tabs: Tab[];
}
