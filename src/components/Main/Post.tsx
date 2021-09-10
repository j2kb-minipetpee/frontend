import styled from '@emotion/styled';
import React from 'react';

import defaultProfile from '@/assets/images/default_profile_small.png';
import defaultCover from '@/assets/images/empty_cat.png';

import { Divider, Spacing } from '../common';
import { ColorMap } from '@/lib/constants/color';

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
      <PostWrapper>
        <div>
          <img src={coverImage || defaultCover}></img>
        </div>
        <Spacing vertical={20} />
        <div>
          <h3>{title}</h3>
          <Spacing vertical={8} />
          <div className="post_description">{description}</div>
        </div>
      </PostWrapper>
      <Spacing vertical={20} />
      <Divider type="row" width={1} color={ColorMap.GREY100} />
      <Spacing vertical={8} />

      <ProfileWrapper>
        <img src={profileImage || defaultProfile} />
        <Spacing horizon={4} />
        <div>{name}</div>
      </ProfileWrapper>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  min-width: 240px;
  height: 400px;
  padding: 20px 20px 0;
  margin: 20px 10px 20px 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 4px;
  cursor: pointer;

  & .post_description {
    max-height: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 라인수 */
    -webkit-box-orient: vertical;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  padding-bottom: 15px;
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
