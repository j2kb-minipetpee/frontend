import styled from '@emotion/styled';
import React from 'react';
import { Profile, Spacing } from '../common';

interface NoteProps {
  name: string;
  profileImage: string;
  createdAt: string;
  content: string;
  visible: boolean;
}

export const Note = ({ name, profileImage, content, createdAt, visible }: NoteProps) => {
  return (
    <NoteContainer>
      <NoteInfo>
        <Profile size="small" imageURL={profileImage} />
        <Spacing horizon={7} />

        <div className="note-info">
          <span>{name}</span>
          <Spacing horizon={5} />
          <span>{createdAt.split(' ')[0]}</span>
        </div>
      </NoteInfo>

      <Spacing vertical={16} />

      {visible ? <div>{content}</div> : <div>비밀 글 입니다.</div>}
    </NoteContainer>
  );
};

const NoteContainer = styled.div`
  margin: 16px 12px;
`;

const NoteInfo = styled.div`
  display: flex;
  align-items: flex-end;

  & .note-info {
    display: flex;
  }
`;
