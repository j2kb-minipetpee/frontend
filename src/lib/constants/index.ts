export const BASE_URL = 'https://api.minipetpee.ml';

export enum QueryKey {
  GetHomeData = 'GetHomeData',
  GetPopularPosts = 'GetPopularPosts',
  SearchMembers = 'SearchMembers',
  GetGuestBooks = 'GetGuestBooks',
  SearcgPosts = 'SearchPosts',
  GetBoardPageablePosts = 'GetBoardPageablePosts',
  GetBoardTargetPost = 'GetBoardTargetPost',
  GetGalleryTargetPost = 'GetGalleryTargetPost',
  GetGalleryPagablePost = 'GetGalleryPagablePost',
  GetSettingData = 'GetSettingData',
  GetStarsData = 'GetStarsData',
  GetFansData = 'GetFansData',
  GetComment = 'GetComment',
}

export type SelectedTab = 'HOMEPEE' | 'BOARD' | 'GALLERY' | 'GUESTBOOK' | 'SETTINGS';
