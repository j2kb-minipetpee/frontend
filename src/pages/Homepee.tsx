import * as React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { HomepeeLayout } from '../layout/HomepeeLayout';

export const Homepee = () => {
  const { path, url } = useRouteMatch();

  return (
    <HomepeeLayout>
      <>
        <Link to={`${url}/gallery`}>갤러리</Link>
        <Link to={`${url}/board`}>게시판</Link>
        <Link to={`${url}/guestnote`}>방명록</Link>
      </>
    </HomepeeLayout>
  );
};
