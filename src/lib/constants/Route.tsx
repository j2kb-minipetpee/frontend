import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { useAuth } from '@/hooks';

export type RouteModel = {
  restricted?: boolean;
} & RouteProps;

export const PrivateRoute = ({ component: ComponentName, ...rest }: RouteModel) => {
  const { id } = useAuth();

  return <Route {...rest} render={(props) => (id ? <ComponentName {...props} /> : <Redirect to="/" />)} />;
};

export const PublicRoute = ({ component: ComponentName, restricted = false, ...rest }: RouteModel) => {
  const { id } = useAuth();

  return <Route {...rest} render={(props) => (id && restricted ? <Redirect to="/" /> : <ComponentName {...props} />)} />;
};
