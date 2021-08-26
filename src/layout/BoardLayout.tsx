import { ColorMap } from '@/lib/constants/color';
import { routes } from '@/lib/constants/routes';
import { GetBoardPostsResponse } from '@/lib/model';
import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { BoardPost } from './BoardPost';

export const BoardLayout = ({ boardPosts }: any) => {
  console.log(boardPosts);
  return (
    <BoardLayoutContainer>
      <BoardPostsContainer>
        {boardPosts.map((boardPost: any) => {
          const {
            id,
            title,
            createdAt,
            image: { id: imageId, url: imageUrl },
          } = boardPost;
          return <BoardPost key={id} imageUrl={imageUrl} title={title} createdAt={createdAt} userId={'inkyu'} viewCount={5}></BoardPost>;
        })}
      </BoardPostsContainer>
      <Link to={routes.BOARD_WRITE}>글쓰기</Link>
    </BoardLayoutContainer>
  );
};

const BoardLayoutContainer = styled.section`
  height: 100%;
  background: ${ColorMap.EMERALD50};
`;

const BoardPostsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
