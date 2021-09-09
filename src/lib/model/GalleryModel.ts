import { PagableData, Comments, Image } from './SharedModel';

export type GetGalleryPagablePostResponse = PagableData<GalleryPost>;

export interface GalleryPost {
  id: number;
  title: string;
  images: Image[];
  comments: Comments;
}

export interface GetGalleryPagablePostRequest {
  pageParam?: {
    size: number;
    page: number;
  };
  homepeeId: string;
}

export type GetGalleryAllPostReponse = GalleryPost[];
export interface GetGalleryTargetPostResponse {
  title: string;
  images: Image[];
}
export interface GetGalleryTargetPostRequest {
  homepeeId: number;
  postId: number;
}

export interface AddGalleryPostRequest {
  homepeeId: number;
  title: string;
  images: Array<string>;
}
export interface AddGalleryPostResponse {
  id: number;
  title: string;
  images: Array<string>;
}
export interface EditGalleryPostRequest {
  homepeeId: number;
  id: number;
  title: string;
  images: Image[];
}
export interface EditGalleryPostResponse {
  homepeeId: number;
  id: number;
  title: string;
  images: Image[];
  visible: boolean;
}
export interface DeleteGalleryPostRequest {
  homepeeId: number;
  postId: number;
}
export interface AddGalleryCommentRequest {
  homepeeId: number;
  postId: number;
  memberId: number;
  content: string;
}
export interface AddGalleryCommentResponse {
  id: number;
  memberId: number;
  content: string;
  createdAt: string;
}
export interface DeleteGalleryCommentRequest {
  homepeeId: number;
  postId: number;
  commentId: number;
}
