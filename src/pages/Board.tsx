import React from 'react';
import { Button } from '@/components';
import { useGetBoardPostsQuery } from '@/hooks';
import { PostListLayout } from '@/layout/PostListLayout';
import { GetBoardPostsResponse } from '@/lib/model';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
import { HomepeeLayout } from '../layout/HomepeeLayout';

export interface IProps {
  postList: GetBoardPostsResponse;
}

export const Board = () => {
  const history = useHistory();
  const { id: homepeeId } = useParams<{ id: string }>();
  const { url } = useRouteMatch();

  const handleClick = () => {
    history.push(`${url}/write`);
  };

  const { isLoading, data } = useGetBoardPostsQuery({ homepeeId });

  return (
    <HomepeeLayout>
      <Button color="GREY100" text="글쓰기" onClick={handleClick} />
      {!isLoading && <PostListLayout postList={data}></PostListLayout>}
    </HomepeeLayout>
  );
};
