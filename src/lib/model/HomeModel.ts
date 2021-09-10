import { PagableData, Profile } from './SharedModel';
export interface FanComment {
  id: number;
  memberId: number;
  memberName: string;
  content: string;
  createdAt: string;
}

export type Relationship = 'NONE' | 'SELF' | 'STAR' | 'UNSTAR';

export interface GetHomeResponse {
  profile: Profile;
  gateImageUrl?: string;
  title: string;
  visitCount: number;
  relationship: Relationship;
}

export interface GetFanCommentsRequest {
  homepeeId: number;
  page: number;
  size: number;
}

export type GetFanCommentsResponse = PagableData<FanComment[]>;
export interface AddFanCommentRequest {
  homepeeId: number;
  memberId: number;
  content: string;
}

export interface AddFanCommentResponse {
  id: number;
  memberId: number;
  content: string;
  createdAt: string;
}

export interface EditFanCommentRequest {
  homepeeId: number;
  memberId: number;
  content: string;
}

export interface EditFanCommentResponse {
  id: number;
  memberId: number;
  content: string;
  createdAt: string;
}

export interface DeleteFanCommentRequest {
  homepeeId: number;
  id: number;
}
