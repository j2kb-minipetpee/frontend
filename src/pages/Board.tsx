import React from 'react';
import { Button, Empty } from '@/components';
import { useAuth, useGetBoardPostsQuery } from '@/hooks';
import { PostListLayout } from '@/layout/PostListLayout';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
import { HomepeeLayout } from '../layout/HomepeeLayout';
import styled from '@emotion/styled';
import { NextButton } from '@/components/common/NextButton';

export const Board = () => {
  const history = useHistory();
  const { id: homepeeId } = useParams<{ id: string }>();
  const targetHomepee = Number(homepeeId);
  const { url } = useRouteMatch();
  const myInfo = useAuth();

  const handleClick = () => {
    history.push(`${url}/write`);
  };

  const handleMoreClick = () => getBoardPostsQuery.fetchNextPage();

  const getBoardPostsQuery = useGetBoardPostsQuery({ homepeeId: targetHomepee });

  return (
    <HomepeeLayout>
      <BoardContainer>
        {Number(homepeeId) === myInfo.id && (
          <NewPostBtnContainer>
            <Button color="GREY100" text="새글" onClick={handleClick} />
          </NewPostBtnContainer>
        )}
        {!getBoardPostsQuery.data?.pages.flatMap((data) => data.content)?.length ? (
          <Empty text="게시판" />
        ) : (
          <PostListLayout postList={getBoardPostsQuery.data?.pages.flatMap((data) => data.content)} />
        )}
        {getBoardPostsQuery.hasNextPage && (
          <MoreLoadBtnContainer>
            <Button text="더보기" onClick={handleMoreClick} />
          </MoreLoadBtnContainer>
        )}
      </BoardContainer>
    </HomepeeLayout>
  );
};

const NewPostBtnContainer = styled.div`
  margin: 42px 0 0 142px;
`;

const MoreLoadBtnContainer = styled.div`
  width: 70%;
  height: auto;
  margin: 86px 192px 0 auto;
  text-align: end;
`;

const BoardContainer = styled.div`
  width: 100%;
`;
