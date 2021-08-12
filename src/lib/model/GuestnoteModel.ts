export interface GuestNote {
  id: number;
  memberId: number;
  content: string;
  visible: boolean;
  createdAt: string;
}

export interface GetGuestnotesRequest {
  homepeeId: string;
}

export type GetGuestnotesResponse = Array<GuestNote>;

export interface AddGuestnoteRequest {
  homepeeId: string;
  memberId: number;
  content: string;
  visible: boolean;
}

export interface AddGuestnoteResponse {
  id: number;
  memberId: number;
  content: string;
  visible: boolean;
  createdAt: string;
}

export interface EditGuestnoteRequest {
  homepeeId: string;
  id: number;
  memberId: number;
  content: string;
  visible: boolean;
  guestnoteId: string;
}

export interface DeleteGuestnoteRequest {
  homepeeId: string;
  guestnoteId: string;
}
