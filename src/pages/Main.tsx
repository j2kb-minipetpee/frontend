import { MainLayout } from '../layout/MainLayout';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const Main = () => {
  return (
    <MainLayout>
      <Link to="/homepee/:id">홈피로 이동</Link>;
    </MainLayout>
  );
};
