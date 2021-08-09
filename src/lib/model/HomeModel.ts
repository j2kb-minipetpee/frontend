export interface Profile {
  name: string;
  birthday?: string;
  species?: string;
  personality?: string;
  gender?: string;
  profileImageUrl?: string;
}

export interface recentPost {
  id: number;
  title: string;
  createdAt: string;
}

export interface NeighborComment {
  id: number;
  memberId: number;
  memberName: string;
  content: string;
  createdAt: string;
}

export interface GetHomeResponse {
  profile: Profile;
  gateImageUrl?: string;
  recentPosts?: recentPost[];
  title: string;
  visitCount: string;
  neighborComments?: NeighborComment[];
}

export interface AddNeighborCommentRequest {
  userId: number;
  memberId: number;
  content: string;
}

export interface AddNeighborCommentResponse {
  id: number;
  memberId: number;
  content: string;
  createdAt: string;
}

export interface EditNeighborCommentRequest {
  userId: number;
  memberId: number;
  content: string;
}

export interface EditNeighborCommentResponse {
  id: number;
  memberId: number;
  content: string;
  createdAt: string;
}

export interface DeleteNeighborCommentRequest {
  userId: number;
  id: number;
}
