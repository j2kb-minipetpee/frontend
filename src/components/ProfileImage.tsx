import styled from '@emotion/styled';
import React from 'react';

interface ProfileImageProps {
  imageURL: string;
  width?: number;
  onClick?: (e: React.MouseEvent) => void;
}

export const ProfileImage = ({ imageURL, onClick, width }: ProfileImageProps) => {
  return (
    <ProfileImageContainer onClick={onClick} width={width}>
      <img src={imageURL} alt="profile-image" />
    </ProfileImageContainer>
  );
};

const ProfileImageContainer = styled.div<{ width?: number }>`
  width: ${(props) => `${props.width}px` || '200px'};
  height: 50px;
  border-radius: 50%;

  & img {
    width: 100%;
    height: 100%;
  }
`;
