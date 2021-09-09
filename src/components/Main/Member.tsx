import { SearchMemberInfo } from '@/lib/model';
import styled from '@emotion/styled';
import React from 'react';
import { Profile, Spacing } from '../common';

interface MemberProps extends SearchMemberInfo {
  onClick: () => void;
}

export const Member = ({ homepeeId, id, name, profileImageUrl, onClick }: MemberProps) => {
  return (
    <MemberContainer onClick={onClick}>
      <Profile size="large" imageURL={profileImageUrl} />
      <Spacing vertical={8} />
      <div>{name}</div>
    </MemberContainer>
  );
};

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  min-width: 120px;
  height: 120px;
  margin: 20px 12px;
  cursor: pointer;
`;
