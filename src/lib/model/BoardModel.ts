import { PagableData, Comments, Image } from './SharedModel';

export interface SimpleBoardPost {
  id: number;
  title: string;
  createdAt: string;
  image: Image;
  viewCount: number;
}

export interface DetailedBoardPost {
  id: number;
  title: string;
  content: string;
  viewCount: number;
  image: Image;
  comments: Comments;
}

// 페이지네이션을 위한 타입 (SimpleBoardPost)
export interface GetBoardPagablePostsRequest {
  homepeeId: number;
  pageParam?: {
    page: number;
    size: number;
  };
}

export type GetBoardPagablePostsResponse = PagableData<SimpleBoardPost[]>;

// 단건조회

export interface GetBoardTargetPostRequest {
  homepeeId: number;
  postId: number;
}

export type GetBoardTargetPostResponse = DetailedBoardPost;

//
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
  postId: string;
}

export interface GetBoardPostResponse {
  id: number;
  title: string;
  content: string;
  viewCount: number;
  image: {
    id: number;
    url: string;
  };
  createdAt: string;
}

export interface GetBoardPostsRequest {
  homepeeId: string;
  size?: number;
  page?: number;
}

export type GetBoardPostsResponse = SimpleBoardPost[];

export interface EditBoardPostRequest {
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
  homepeeId: string;
  postId: string;
}

export interface DeleteBoardCommentRequest {
  homepeeId: number;
  commentId: number;
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

export interface DeleteBoardCommentRequest {
  homepeeId: number;
  commentId: number;
}
