import { routes } from '@/lib/constants/routes';
import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

interface BoardPost {
  imageUrl: string;
  title: string;
  createdAt: string;
  userId: string;
  viewCount: number;
}

export const BoardPost = ({ imageUrl, title, createdAt, userId, viewCount }: BoardPost) => {
  return (
    <BoardPostContainer>
      <BoardPostImage src={imageUrl} />
      <Link to={routes.BOARD_DETAILED_POST}>{title}</Link>

      <BoardPostSubInfo>
        <div>{createdAt}</div>
        <Link to="">userId</Link>
        <div>{viewCount}</div>
      </BoardPostSubInfo>
    </BoardPostContainer>
  );
};

const BoardPostImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const BoardPostContainer = styled.article`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
`;

const BoardPostSubInfo = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
  align-items: center;
`;
