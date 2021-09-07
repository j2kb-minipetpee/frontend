export const BASE_URL = 'https://api.minipetpee.ml';

export enum QueryKey {
  GetHomeData = 'GetHomeData',
  GetPopularPosts = 'GetPopularPosts',
  SearchMembers = 'SearchMembers',
  GetGuestBooks = 'GetGuestBooks',
  SearcgPosts = 'SearchPosts',
  GetBoardPosts = 'GetBoardPosts',
  GetBoardPost = 'GetBoardPost',
  GetGalleryPost = 'GetGalleryPost',
  GetSettingData = 'GetSettingData',
  GetMyStarsData = 'GetMyStarsData',
  GetMyFansData = 'GetMyStarsData',
}

export type SelectedTab = 'HOMEPEE' | 'BOARD' | 'GALLERY' | 'GUESTBook' | 'SETTINGS';
