export interface GalleryImage {
  id: number;
  url: string;
}
export interface GetGalleryPostRequest {
  homepeeId: number;
}
export interface GetGalleryPostResponse {
  id: number;
  title: string;
  images: Array<GalleryImage>;
  viewCount: number;
  visible: boolean;
}
export interface AddGalleryPostRequest {
  homepeeId: string;
  title: string;
  images: Array<string>;
  visible: boolean;
}
export interface AddGalleryPostResponse {
  id: number;
  title: string;
  images: Array<string>;
  visible: boolean;
}
export interface EditGalleryPostRequest {
  homepeeId: string;
  id: number;
  title: string;
  image: Array<GalleryImage>;
  visible: boolean;
}
export interface EditGalleryPostResponse {
  homepeeId: string;
  id: number;
  title: string;
  images: Array<GalleryImage>;
  visible: boolean;
}
export interface DeleteGalleryPostRequest {
  homepeeId: string;
  postId: number;
}
export interface AddGalleryCommentRequest {
  homepeeId: string;
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
  homepeeId: string;
  postId: number;
  commentId: number;
}
