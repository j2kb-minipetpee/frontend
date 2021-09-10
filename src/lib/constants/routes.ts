export const routes: routesType = {
  HOME: '/',
  HOMEPEE: '/homepee/:id',
  GALLERY: '/homepee/:id/gallery/posts',
  GALLERY_WRITE: '/homepee/:id/gallery/posts/write',
  GALLERY_MODIFY_POST: `/homepee/:id/gallery/posts/modify/:postId`,
  BOARD: `/homepee/:id/board/posts`,
  BOARD_DETAILED_POST: '/homepee/:id/board/posts/:postId',
  BOARD_MODIFY_POST: '/homepee/:id/board/posts/modify/:postId',
  BOARD_WRITE: '/homepee/:id/board/posts/write',
  GUESTBOOK: '/homepee/:id/guestbook',
  SETTINGS: '/homepee/:id/settings',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  OTHER: '*',
};

interface routesType {
  //[index: string]: string;
  HOME: string;
  HOMEPEE: string;
  GALLERY: string;
  GALLERY_WRITE: string;
  GALLERY_MODIFY_POST: string;
  BOARD: string;
  BOARD_DETAILED_POST: string;
  BOARD_MODIFY_POST: string;
  BOARD_WRITE: string;
  GUESTBOOK: string;
  SETTINGS: string;
  SIGNIN: string;
  SIGNUP: string;
  OTHER: string;
}
