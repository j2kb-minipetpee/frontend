import { hot } from 'react-hot-loader/root';
import React from 'react';
import { css, Global } from '@emotion/react';
import { Main } from './pages/Main';
import { Switch } from 'react-router-dom';
import { routes } from './lib/constants/routes';
import { HomepeePage } from './pages/Homepee';
import { Gallery } from './pages/Gallery';
import { Board } from './pages/Board';
import { Guestnote } from './pages/Guestnote';
import { PrivateRoute, PublicRoute } from './lib/constants/PrivateRoute';
import { SignInPage } from './pages/SiginIn';
import { SignUpPage } from './pages/SignUp';
import { Setting } from './pages/Setting';
import { ColorMap } from './lib/constants/color';
import { WriteBoardPost } from './pages/WriteBoardPost';
import { DetailedBoardPost } from './pages/DetailedBoardPost';
import { WriteGalleryPost } from './pages/WriteGalleryPost';

const App = () => (
  <>
    <Global styles={globalStyle}></Global>
    <Switch>
      <PublicRoute path={routes.GUESTNOTE} component={Guestnote} />
      <PrivateRoute path={routes.BOARD_WRITE} component={WriteBoardPost} />
      <PublicRoute path={routes.BOARD_DETAILED_POST} component={DetailedBoardPost} />
      <PrivateRoute path={routes.GALLERY_WRITE} component={WriteGalleryPost} />
      <PublicRoute path={routes.GALLERY} component={Gallery} />
      <PublicRoute path={routes.BOARD} component={Board} exact />
      <PublicRoute path={routes.HOMEPEE} component={HomepeePage} />
      <PublicRoute path={routes.SIGNIN} component={SignInPage} restricted />
      <PublicRoute path={routes.SIGNUP} component={SignUpPage} restricted />
      <PrivateRoute path={routes.SETTINGS} component={Setting} />
      <PublicRoute path={routes.HOME} component={Main} exact />
    </Switch>
  </>
);

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nanum Gothic', sans-serif;
    color: ${ColorMap.GREY100};
  }

  html {
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
  }

  #root {
    height: 100%;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

export default hot(App);
