import { SearchMemberInfo } from '@/lib/model';
import React from 'react';
import { Profile } from '../common';

export const Member = ({ homepeeId, id, name, profileImageUrl }: SearchMemberInfo) => {
  return (
    <div>
      <Profile size="large" imageURL={profileImageUrl} />
      <div>{name}</div>
    </div>
  );
};
