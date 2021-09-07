import styled from '@emotion/styled';
import React from 'react';

interface commentProps {
  writer: string;
  content: string;
}

export const Comment = () => {
  return (
    <CommentConatiner>
      <CommentWriter>작성자</CommentWriter>
      <CommentContent>내용</CommentContent>
    </CommentConatiner>
  );
};

const CommentConatiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 14px;
`;

const CommentWriter = styled.div``;

const CommentContent = styled.div``;
