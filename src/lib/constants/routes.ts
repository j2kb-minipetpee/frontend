export const routes: routesType = {
  HOME: '/',
  HOMEPEE: '/homepee/:id',
  GALLERY: '/homepee/:id/gallery/posts',
  GALLERY_DETAILED_POST: '/homepee/:id/gallery/posts/:postId',
  GALLERY_WRITE: '/homepee/:id/gallery/posts/write',
  BOARD: `/homepee/:id/board/posts`,
  BOARD_DETAILED_POST: '/homepee/:id/board/posts/:postId',
  BOARD_WRITE: '/homepee/:id/board/posts/write',
  GUESTNOTE: '/homepee/:id/guestnote',
  SETTINGS: '/homepee/:id/settings',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
};

interface routesType {
  //[index: string]: string;
  HOME: string;
  HOMEPEE: string;
  GALLERY: string;
  GALLERY_DETAILED_POST: string;
  GALLERY_WRITE: string;
  BOARD: string;
  BOARD_DETAILED_POST: string;
  BOARD_WRITE: string;
  GUESTNOTE: string;
  SETTINGS: string;
  SIGNIN: string;
  SIGNUP: string;
}
