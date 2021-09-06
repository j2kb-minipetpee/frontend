export const BASE_URL = 'https://api.minipetpee.ml';

export enum QueryKey {
  GetHomeData = 'GetHomeData',
  GetPopularPosts = 'GetPopularPosts',
  SearchMembers = 'SearchMembers',
  GetGuestNotes = 'GetGuestNotes',
  SearcgPosts = 'SearchPosts',
  GetBoardPosts = 'GetBoardPosts',
  GetBoardPost = 'GetBoardPost',
  GetGalleryPost = 'GetGalleryPost',
  GetSettingData = 'GetSettingData',
  GetMyStarsData = 'GetMyStarsData',
  GetMyFansData = 'GetMyStarsData',
}

export type SelectedTab = 'HOMEPEE' | 'BOARD' | 'GALLERY' | 'GUESTNOTE' | 'SETTINGS';
