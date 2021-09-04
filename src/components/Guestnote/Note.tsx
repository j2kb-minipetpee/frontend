import React from 'react';
import { Profile } from '../common';

interface NoteProps {
  name: string;
  profileImage: string;
  createdAt: string;
  content: string;
  visible: boolean;
}

export const Note = ({ name, profileImage, content, createdAt, visible }: NoteProps) => {
  return (
    <div>
      <div>
        <Profile size="small" imageURL={profileImage} />
        <span>{name}</span>
        <span>{createdAt}</span>
      </div>

      {visible ? <div>{content}</div> : <div>비밀 글 입니다.</div>}
    </div>
  );
};
