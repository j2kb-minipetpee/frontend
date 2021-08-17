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
import { SignIn } from './pages/SiginIn';
import { SignUp } from './pages/SignUp';
import { Setting } from './pages/Setting';

const App = () => (
  <>
    <Global styles={globalStyle}></Global>
    <Switch>
      <PublicRoute path={routes.GUESTNOTE} component={Guestnote} restricted={false} />
      <PublicRoute path={routes.BOARD} component={Board} restricted={false} />
      <PublicRoute path={routes.GALLERY} component={Gallery} restricted={false} />
      <PrivateRoute path={routes.HOMEPEE} component={Homepee} />
      <PrivateRoute path={routes.SETTING} component={Setting} />
      <PublicRoute path={routes.SIGNIN} component={SignIn} restricted={true} />
      <PublicRoute path={routes.SIGNUP} component={SignUp} restricted={true} />
      <PublicRoute path={routes.HOME} component={Main} restricted={false} />
    </Switch>
  </>
);

export default App;

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
  }

  ul {
    list-style: none;
  }
`;
