import { Member, PagableData } from './SharedModel';

export interface GuestNote {
  id: number;
  member: Member;
  content: string;
  visible: boolean;
  createdAt: string;
}

export interface GetGuestNotesRequest {
  homepeeId: string;
}

export type GetGuestNotesResponse = PagableData<GuestNote[]>;

export interface AddGuestNoteRequest {
  homepeeId: string;
  memberId: number;
  content: string;
  visible: boolean;
}

export interface AddGuestNoteResponse {
  id: number;
  memberId: number;
  content: string;
  visible: boolean;
  createdAt: string;
}

export interface EditGuestNoteRequest {
  homepeeId: string;
  memberId: number;
  content: string;
  visible: boolean;
  guestNoteId: string;
}

export interface DeleteGuestNoteRequest {
  homepeeId: string;
  guestNoteId: string;
}
