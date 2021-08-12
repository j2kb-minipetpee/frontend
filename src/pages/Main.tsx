import * as React from 'react';
import { Link, useParams } from 'react-router-dom';

export const Main = () => {
  const param = useParams();
  console.log(param);
  return <Link to="/homepee/:id">홈피로 이동</Link>;
};

export default Main;
