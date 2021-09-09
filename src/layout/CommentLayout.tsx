import styled from '@emotion/styled';
import React, { useRef } from 'react';
import { Comment } from '@/components/common/Comment'; // 컴포넌트
import { NextButton } from '@/components/common/NextButton';
import { useAuth } from '@/hooks';
import { useParams } from 'react-router';
import { useAddCommentMutation, useDeleteCommentMutation } from '@/hooks/query/comment';
import { Comment as CommentModel } from '@/lib/model'; // shared Model

const ENTER = 'Enter';

interface CommentListProps {
  commentList: CommentModel[];
  postId: number;
}

export const CommentLayout = ({ commentList, postId }: CommentListProps) => {
  const { id: homepeeId } = useParams<{ id: string; postId: string }>();
  const myInfo = useAuth();
  const commentRef = useRef(null);
  const useAddComment = useAddCommentMutation();
  const useDeleteComment = useDeleteCommentMutation();

  const handleCommentDelete = (commentId: number) => {
    useDeleteComment.mutate(
      {
        commentId,
        homepeeId: Number(homepeeId),
        postId,
      },
      { onSuccess: () => alert('삭제를 완료하였습니다.') },
    );
  };

  // memberId를 redux에서 꺼내와서 써야한다.
  const handleCommentChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const comment = commentRef.current.value;
    if (comment && e.key === ENTER) {
      useAddComment.mutate(
        {
          content: comment,
          homepeeId: Number(homepeeId),
          member: {
            id: myInfo.id,
            name: myInfo.name,
          },
          postId: Number(postId),
        },
        {
          onSuccess: () => {
            commentRef.current.value = '';
            alert('댓글 작성에 성공하였습니다.');
          },
        },
      );
    } else if (!comment && e.key === ENTER) {
      alert('내용을 입력해주세요');
    }
  };
  return (
    <CommentContainer>
      <CommentWrapper>
        <CommentHeader>
          <div>댓글</div>
          <CommentInput onKeyPress={handleCommentChange} ref={commentRef} />
        </CommentHeader>
        {commentList.map((comment: any) => {
          return (
            <Comment
              key={comment.commentId}
              content={comment.content}
              name={comment.name}
              commentId={comment.commentId}
              memberId={comment.memberId}
              handleCommentDelete={handleCommentDelete}
            />
          );
        })}
        <NextButtonWrapper>
          <NextButton onClick={() => alert('더보기')} />
        </NextButtonWrapper>
      </CommentWrapper>
    </CommentContainer>
  );
};

const CommentContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 34px;
`;

const CommentWrapper = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  font-size: 15px;
  font-weight: 900;
`;

const CommentInput = styled.input`
  width: 80%;
`;

const NextButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 33px;
`;
