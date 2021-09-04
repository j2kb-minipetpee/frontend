import React from 'react';
import { Route, Redirect, RouteProps, useParams } from 'react-router-dom';

import { useAuth } from '@/hooks';
import { useMemo } from 'react';

export type RouteModel = {
  restricted?: boolean;
} & RouteProps;

export const PrivateRoute = ({ component: ComponentName, ...rest }: RouteModel) => {
  const { id, homepeeId } = useAuth();
  const { id: targetHomepeeId } = useParams<{ id: string }>();

  const isAuthorized = useMemo(() => homepeeId === Number(targetHomepeeId), [homepeeId, targetHomepeeId]);

  return <Route {...rest} render={(props) => (id && isAuthorized ? <ComponentName {...props} /> : <Redirect to="/" />)} />;
};

export const PublicRoute = ({ component: ComponentName, restricted = false, ...rest }: RouteModel) => {
  const { id } = useAuth();

  return <Route {...rest} render={(props) => (id && restricted ? <Redirect to="/" /> : <ComponentName {...props} />)} />;
};
