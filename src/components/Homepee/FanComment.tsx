import styled from '@emotion/styled';
import React from 'react';
import { Button, Spacing } from '../common';
import commentsBubble from '@/assets/images/comments_bubble.png';
import { useInput } from '@/hooks';
import { ColorMap } from '@/lib/constants/color';
import { NextButton } from '../common/NextButton';
import { FanComment as FanCommentType } from '@/lib/model';
import { Empty } from '../common/Empty';
import { Loading } from '../common/Loading';

interface FanCommentProps {
  memberId: number;
  fanComments?: FanCommentType[];
  isMore?: boolean;
  isFan: boolean;
  isLoading: boolean;
  onAddFanComment: (comment: string) => void;
  onDeleteFanComment: () => void;
  onMoreClick: () => void;
}

export const FanComment = ({ fanComments, memberId, onAddFanComment, onDeleteFanComment, isMore, isLoading, isFan, onMoreClick }: FanCommentProps) => {
  const [comment, onChangeComment] = useInput('');

  return (
    <FanCommentContainer>
      <h4>공생평</h4>
      <Spacing vertical={12} />

      {isFan && (
        <Form>
          <Input value={comment} onChange={onChangeComment} />
          <Spacing horizon={18} />
          <Button
            color="EMERALD100"
            text="작성"
            onClick={(e) => {
              e.preventDefault();
              onAddFanComment(comment);
            }}
          />
        </Form>
      )}

      <Spacing vertical={16} />

      {isLoading && <Loading />}
      {!isLoading && (!fanComments || fanComments?.length === 0) && <Empty />}

      {fanComments?.map((comment) => (
        <React.Fragment key={comment.id}>
          <FanCommentWrapper>
            <div>
              <img src={commentsBubble} alt="comments" />
            </div>
            <div className="content">{comment.content}</div>
            <div className="name">{comment.memberName}</div>
            <div className="date">{comment.createdAt.split(' ')[0]}</div>
            {comment.memberId === memberId && <div onClick={onDeleteFanComment}>X</div>}
          </FanCommentWrapper>
          <Spacing vertical={16} />
        </React.Fragment>
      ))}

      {isMore && <NextButton onClick={onMoreClick} />}
    </FanCommentContainer>
  );
};

const FanCommentContainer = styled.div`
  width: 711px;
  padding-top: 117px;
`;

const Form = styled.form`
  display: flex;
`;

const FanCommentWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & .content {
    width: 300px;
    cursor: pointer;
  }

  & .name {
    width: 80px;
  }

  & .date {
    width: 100px;
  }
`;

const Input = styled.input`
  width: 585px;
  height: 31px;
  font-size: 12px;
  padding: 0 12px;
  color: ${ColorMap.GREY70};
`;
