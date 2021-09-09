import styled from '@emotion/styled';
import React, { useRef } from 'react';
import { Comment } from '@/components/common/Comment';
import { NextButton } from '@/components/common/NextButton';
import { useAuth } from '@/hooks';
import { useParams } from 'react-router';
import { useAddCommentMutation, useDeleteCommentMutation, useGetCommentQuery } from '@/hooks/query/comment';
import { Button } from '@/components';

const ENTER = 'Enter';

interface CommentListProps {
  postId: number;
}

export const CommentLayout = ({ postId }: CommentListProps) => {
  const { id: homepeeId } = useParams<{ id: string; postId: string }>();
  const myInfo = useAuth();
  const commentRef = useRef(null);
  const useAddComment = useAddCommentMutation();

  const getCommentQuery = useGetCommentQuery({ homepeeId: Number(homepeeId), postId: Number(postId) });
  const useDeleteComment = useDeleteCommentMutation();

  const handleCommentDelete = (commentId: number) => {
    useDeleteComment.mutate(
      {
        commentId,
        homepeeId: Number(homepeeId),
        postId,
      },
      { onSuccess: () => alert('삭제를 완료하였습니다.'), onError: () => alert('삭제에 실패하였습니다.') },
    );
  };

  const handleMoreClick = () => getCommentQuery.fetchNextPage();

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

  const handleAddCommentClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const comment = commentRef.current.value;
    if (comment) {
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
    } else {
      alert('내용을 입력해주세요');
    }
  };

  return (
    <CommentContainer>
      <CommentWrapper>
        <CommentHeader>
          <CommentName>댓글</CommentName>
        </CommentHeader>
        <CommentInputWrapper>
          <CommentInput onKeyPress={handleCommentChange} ref={commentRef} placeholder="댓글을 남겨주세요" />
          <Button text="업로드" onClick={handleAddCommentClick} />
        </CommentInputWrapper>

        {getCommentQuery.data &&
          getCommentQuery?.data?.pages
            .flatMap((data) => data.content)
            .map((comment) => {
              return (
                <Comment
                  key={comment.id}
                  content={comment.content}
                  name={comment.member.name}
                  commentId={comment.id}
                  memberId={comment.member.id}
                  handleCommentDelete={handleCommentDelete}
                />
              );
            })}
      </CommentWrapper>

      {getCommentQuery.hasNextPage && (
        <NextButtonWrapper>
          <NextButton onClick={handleMoreClick} />
        </NextButtonWrapper>
      )}
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
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 15px;
  font-weight: 900;
`;

const CommentInput = styled.input`
  width: 90%;
  height: 31px;
  padding-left: 12px;
`;

const NextButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 33px;
  border: 1px solid red;
`;

const CommentInputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 21px;
`;

const CommentName = styled.div`
  padding-left: 20px;
`;
