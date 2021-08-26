import styled from '@emotion/styled';
import React from 'react';

import defaultProfile from '@/assets/images/default_profile_small.png';
import { Spacing } from '../common';

interface PostProps {
  coverImage?: string;
  title: string;
  description: string;
  profileImage?: string;
  name: string;
  onClick: () => void;
}

export const Post = ({ description, name, profileImage, title, coverImage, onClick }: PostProps) => {
  return (
    <PostContainer onClick={onClick}>
      <ProfileWrapper>
        <img src={profileImage || defaultProfile} />
        <Spacing horizon={4} />
        <div>{name}</div>
      </ProfileWrapper>
      <PostWrapper>
        <div>
          <img src={coverImage}></img>
        </div>
        <div>
          <h3>{title}</h3>
          <div>{description}</div>
        </div>
      </PostWrapper>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  width: 250px;
  height: 300px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid lightgray;
  & img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

const PostWrapper = styled.div`
  & img {
    width: 100%;
    height: 180px;
  }
`;
