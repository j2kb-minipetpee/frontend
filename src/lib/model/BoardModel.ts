export interface AddBoardPostRequest {
  title: string;
  content: string;
  image: {
    id: number;
    url: string;
  };
  visible: boolean;
  homepeeId: number;
}

export interface AddBoardPostResponse {
  id: number;
  title: string;
  content: string;
  image: {
    id: number;
    url: string;
  };
  createdAt: string;
}

export interface GetBoardPostRequest {
  homepeeId: string;
  postId: number;
}

export interface GetBoardPostResponse {
  id: number;
  title: string;
  content: string;
  viewCount: number;
  imageId: number;
  imageUrl: string;
}

export interface GetBoardPostsRequest {
  homepeeId: string;
  size: number;
  page: number;
}

export type GetBoardPostsResponse = Array<SimplifiedPost>;

export interface SimplifiedPost {
  id: number;
  title: string;
  createdAt: string;
}

export interface EditBoardPostRequest {
  id: number;
  title: string;
  content: string;
  image: {
    id: number;
    url: string;
  };
  homepeeId: number;
  postId: number;
}

export interface EditBoardPostResponse {
  id: number;
  title: string;
  content: string;
  viewCount: number;
  imageId: number;
  imageUrl: string;
}

export interface DeleteBoardPostRequset {
  homepeeId: number;
  postId: number;
}

export interface AddBoardCommentRequest {
  homepeeId: number;
  postId: number;
  memberId: number;
  content: string;
}

export interface AddBoardCommentResponse {
  id: number;
  memberId: number;
  content: string;
  createdAt: string;
}

export interface DeleteCommentRequest {
  homepeeId: number;
  postId: number;
}
