import styled from '@emotion/styled';
import React, { useMemo } from 'react';

import DefaultSmallProfile from '@/assets/images/default_profile_small.png';
import DefaultLargeProfile from '@/assets/images/default_profile_large.png';

export interface ProfileProps {
  size: 'small' | 'large';
  imageURL?: string;
}

export const Profile = ({ size, imageURL }: ProfileProps) => {
  const defaultImage = useMemo(() => (size === 'small' ? DefaultSmallProfile : DefaultLargeProfile), [size]);

  return (
    <ProfileContainer size={size}>
      <img src={imageURL || defaultImage} alt="profile" />
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div<Pick<ProfileProps, 'size'>>`
  width: ${({ size }) => (size === 'large' ? '97px' : '57px')};
  height: ${({ size }) => (size === 'large' ? '97px' : '57px')};

  & img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
