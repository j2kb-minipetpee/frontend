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
  image: Array<GalleryImage>;
  visible: boolean;
}
export interface EditGalleryPostResponse {
  homepeeId: number;
  id: number;
  title: string;
  images: Array<GalleryImage>;
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
