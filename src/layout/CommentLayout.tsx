import styled from '@emotion/styled';
import React from 'react';
import { Comment } from '@/components/common/Comment';
import { NextButton } from '@/components/common/NextButton';

export const CommentLayout = () => {
  return (
    <CommentContainer>
      <CommentHeader>댓글</CommentHeader>
      <Comment />
      <Comment />
      <Comment />
      <NextButtonWrapper>
        <NextButton onClick={() => alert('더보기')} />
      </NextButtonWrapper>
    </CommentContainer>
  );
};

const CommentContainer = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const CommentHeader = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 900;
`;

const NextButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 33px;
`;
