import { SelectedTab } from '../constants';

export const convertPathname = (pathname: string): SelectedTab => {
  switch (true) {
    case pathname.includes('guestBook'):
      return 'GUESTBook';
    case pathname.includes('gallery'):
      return 'GALLERY';
    case pathname.includes('board'):
      return 'BOARD';
    case pathname.includes('setting'):
      return 'SETTINGS';
    default:
      return 'HOMEPEE';
  }
};
