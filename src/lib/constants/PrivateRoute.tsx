import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { isLogin } from './isLogin';

export type RouteModel = {
  restricted?: boolean;
} & RouteProps;

export const PrivateRoute = ({ component: ComponentName, ...rest }: RouteModel): any => {
  return <Route {...rest} render={(props) => (isLogin() ? <ComponentName {...props} /> : <Redirect to="/" />)} />;
};

export const PublicRoute = ({ component: ComponentName, restricted, ...rest }: RouteModel): any => {
  return <Route {...rest} render={(props) => (isLogin() && restricted ? <Redirect to="/" /> : <ComponentName {...props} />)} />;
};
