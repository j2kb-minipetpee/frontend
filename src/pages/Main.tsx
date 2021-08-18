import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout';

export const Main = () => {
  const param = useParams();
  console.log(param);

  return (
    <MainLayout>
      <Link to="/homepee/:id">홈피로 이동</Link>;
    </MainLayout>
  );
};

export default Main;
