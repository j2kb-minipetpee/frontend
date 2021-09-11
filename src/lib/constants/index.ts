export const BASE_URL = 'http://exerciseelasticbeanstalk-env.eba-pmfkjpaq.ap-northeast-2.elasticbeanstalk.com';

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
