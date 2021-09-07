import { Member, PagableData } from './SharedModel';

export interface GuestBook {
  id: number;
  member: Member;
  content: string;
  visible: boolean;
  createdAt: string;
}

export interface GetGuestBooksRequest {
  homepeeId: string;
}

export type GetGuestBooksResponse = PagableData<GuestBook[]>;

export interface AddGuestBookRequest {
  homepeeId: string;
  memberId: number;
  content: string;
  visible: boolean;
}

export interface AddGuestBookResponse {
  id: number;
  memberId: number;
  content: string;
  visible: boolean;
  createdAt: string;
}

export interface EditGuestBookRequest {
  homepeeId: string;
  memberId: number;
  content: string;
  visible: boolean;
  guestBookId: string;
}

export interface DeleteGuestBookRequest {
  homepeeId: string;
  guestBookId: string;
}
