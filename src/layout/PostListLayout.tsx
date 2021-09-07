import React from 'react';
import styled from '@emotion/styled';
import { SimplePost } from '@/components/common/SimplePost';
import { GetBoardPostsResponse } from '@/lib/model';

export interface IProps {
  postList: GetBoardPostsResponse;
}

export const PostListLayout = ({ postList }: IProps) => {
  return (
    <PostListContainer>
      {postList.map((post) => (
        <SimplePost key={post.id} post={post} />
      ))}
    </PostListContainer>
  );
};

// 1280 70% 기준 양 옆 192px or flex?
const PostListContainer = styled.section`
  width: 70%;
  height: auto;
  margin: 100px 0 0 192px;
`;
