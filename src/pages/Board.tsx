import React from 'react';
import { Button } from '@/components';
import { useGetBoardPostsQuery } from '@/hooks';
import { PostListLayout } from '@/layout/PostListLayout';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
import { HomepeeLayout } from '../layout/HomepeeLayout';

export const Board = () => {
  const history = useHistory();
  const { id: homepeeId } = useParams<{ id: string }>();
  const targetHomepee = Number(homepeeId);
  const { url } = useRouteMatch();

  const handleClick = () => {
    history.push(`${url}/write`);
  };
  const handleMoreClick = () => getBoardPostsQuery.fetchNextPage();

  const getBoardPostsQuery = useGetBoardPostsQuery({ homepeeId: targetHomepee });

  return (
    <HomepeeLayout>
      <Button color="GREY100" text="글쓰기" onClick={handleClick} />
      {getBoardPostsQuery.data && <PostListLayout postList={getBoardPostsQuery.data?.pages.flatMap((data) => data.content)} />}
      <button onClick={handleMoreClick}>더보기</button>
    </HomepeeLayout>
  );
};
