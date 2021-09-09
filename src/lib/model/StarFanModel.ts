import { PagableData } from './SharedModel';

export interface StarRequest {
  starId: number;
}
export interface UnstarRequest {
  starId: number;
}

export interface Fan {
  id: number;
  memberId: number;
  name: string;
  profileImageUrl: string;
  createdAt: string;
}
export interface Star {
  id: number;
  memberId: number;
  name: string;
  profileImageUrl: string;
  createdAt: string;
}

export type GetStarsResponse = PagableData<Star>;

export type GetFansResponse = PagableData<Fan>;
