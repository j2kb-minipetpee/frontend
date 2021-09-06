import { Member, PagableData } from './SharedModel';

interface Post {
  id: number;
  title: string;
  createdAt: string;
  imageUrl: string;
  content: string;
}

export interface PopularPost {
  homepeeId: number;
  post: Post;
  member: Member;
}

export type GetPopularPostsResponse = PagableData<PopularPost[]>;

export interface SearchMemberInfo extends Member {
  homepeeId: number;
}

export type SearchMembersResponse = PagableData<SearchMemberInfo[]>;

export interface SearchPostInfo {
  homepeeId: number;
  post: Post;
  member: Member;
}

export type SearchPostsResponse = PagableData<SearchPostInfo[]>;
