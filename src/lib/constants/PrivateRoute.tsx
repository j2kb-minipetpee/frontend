import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { isLogin } from './isLogin';
import { isAuthorized } from './isAuthorized';

export type RouteModel = {
  restricted?: boolean;
} & RouteProps;

export const PrivateRoute = ({ component: ComponentName, ...rest }: RouteModel) => {
  return <Route {...rest} render={(props) => (isLogin() && isAuthorized() ? <ComponentName {...props} /> : <Redirect to="/" />)} />;
};

export const PublicRoute = ({ component: ComponentName, restricted = false, ...rest }: RouteModel) => {
  return <Route {...rest} render={(props) => (isLogin() && restricted ? <Redirect to="/" /> : <ComponentName {...props} />)} />;
};
