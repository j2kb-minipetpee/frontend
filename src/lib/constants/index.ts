export const BASE_URL = 'http://test.com';

export enum QueryKey {
  GetHomeData = 'GetHomeData',
  GetPopularPosts = 'GetPopularPosts',
  SearchMembers = 'SearchMembers',
  SearcgPosts = 'SearchPosts',
}

export enum ColorMap {
  EMERALD = '#61c2a2',
  WHITE = '#ffffff',
  GREY = 'grey',
  BLACK = 'black',
}

export type Color = keyof ColorMap;
