import styled from '@emotion/styled';
import React from 'react';
import { Divider, Spacing } from '../common';
import commentsBubble from '@/assets/images/comments_bubble.png';

interface FanComments {
  id: number;
  memberId: number;
  memberName: string;
  content: string;
  createdAt: string;
}

interface FanCommentProps {
  fanComments: FanComments[];
}

export const FanComment = ({ fanComments }: FanCommentProps) => {
  return (
    <FanCommentContainer>
      <h4>공생평</h4>
      <Spacing vertical={8} />
      <Divider color="black" type="row" width={1.5} />
      <Spacing vertical={16} />

      {fanComments.map((comment) => (
        <React.Fragment key={comment.id}>
          <FanCommentWrapper>
            <div>
              <img src={commentsBubble} alt="comments" />
            </div>
            <div className="content">{comment.content}</div>
            <div className="name">{comment.memberName}</div>
            <div className="date">{comment.createdAt.split(' ')[0]}</div>
          </FanCommentWrapper>
          <Spacing vertical={16} />
        </React.Fragment>
      ))}
    </FanCommentContainer>
  );
};

const FanCommentContainer = styled.div`
  width: 711px;
  padding-top: 117px;
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
