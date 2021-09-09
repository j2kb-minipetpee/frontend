import styled from '@emotion/styled';
import React from 'react';
import delBtn from '@/assets/images/next_small.png';
import { useAuth } from '@/hooks';
import { Link } from 'react-router-dom';

export interface CommentProps {
  commentId?: number;
  memberId?: number;
  name: string;
  content: string;
  handleCommentDelete?: (commentId: number) => void;
}

export const Comment = ({ commentId, memberId, name, content, handleCommentDelete }: CommentProps) => {
  const myInfo = useAuth();
  return (
    <CommentConatiner>
      <CommentWriter>
        <Link to={`/homepee/${memberId}`}>{name}</Link>
      </CommentWriter>
      <CommentContent>{content}</CommentContent>

      {myInfo.id === memberId && (
        <CommentDeleteBtn onClick={() => handleCommentDelete(commentId)}>
          <img src={delBtn} />
        </CommentDeleteBtn>
      )}
    </CommentConatiner>
  );
};

const CommentConatiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`;

const CommentWriter = styled.div`
  padding-left: 20px;
`;

const CommentContent = styled.div`
  width: 80%;
`;

const CommentDeleteBtn = styled.div``;
