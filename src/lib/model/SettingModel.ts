export interface Profile {
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
export interface Tab {
  id: number;
  homepeeId: number;
  type: GalleryType;
}

export interface Profiles {
  profile: Profile;
  tabs: Tab;
}

export interface GetSettingRequest {
  homepeeId: string;
}

export interface EditSettingRequest {
  homepeeId: string;
  profile: Profile;
  tabs: Tab;
}

export interface GetSettingResponse {
  profile: Profile;
  tabs: Array<Tab>;
}
