import React from 'react';
import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import { Main } from './pages/Main';
import { Route, Switch } from 'react-router-dom';
import { routes } from './lib/constants/routes';
import { Homepee } from './pages/Homepee';
import { Gallery } from './pages/Gallery';
import { Board } from './pages/Board';
import { Guestnote } from './pages/Guestnote';
import { PrivateRoute, PublicRoute } from './lib/constants/PrivateRoute';
import { SignInPage } from './pages/SiginIn';
import { SignUpPage } from './pages/SignUp';
import { Setting } from './pages/Setting';

const App = () => (
  <>
    <Global styles={globalStyle}></Global>
    <Switch>
      <PublicRoute path={routes.GUESTNOTE} component={Guestnote} />
      <PublicRoute path={routes.BOARD} component={Board} />
      <PublicRoute path={routes.GALLERY} component={Gallery} />
      <PublicRoute path={routes.HOMEPEE} component={Homepee} />
      <PrivateRoute path={routes.SETTING} component={Setting} />
      <PublicRoute path={routes.SIGNIN} component={SignInPage} restricted />
      <PublicRoute path={routes.SIGNUP} component={SignUpPage} restricted />
      <PublicRoute path={routes.HOME} component={Main} />
    </Switch>
  </>
);

export default App;

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nanum Gothic', sans-serif;
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
`;
