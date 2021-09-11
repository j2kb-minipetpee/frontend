import { SimpleBoardPost } from '@/lib/model';
import styled from '@emotion/styled';
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import emptyImg from '@/assets/images/empty_cat.png';

interface ISimplePostProps {
  post: SimpleBoardPost;
}

export const SimplePost = ({ post }: ISimplePostProps) => {
  const { url } = useRouteMatch();

  return (
    <SimplePostContainer>
      <SimplePostImage src={post.image.url ? post.image.url : emptyImg} />
      <SimplePostTitle>
        <Link to={`${url}/${post.id}`}>{post.title}</Link>
      </SimplePostTitle>
      <SimplePostSubDataContainer>
        <SimplePostCreatedAt>{post.createdAt.split(' ')[0]}</SimplePostCreatedAt>
        <SimplePostViewCount>{post.viewCount}</SimplePostViewCount>
      </SimplePostSubDataContainer>
    </SimplePostContainer>
  );
};

const SimplePostContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 36px;
`;

const SimplePostImage = styled.img`
  width: 95px;
  height: 95px;
`;

const SimplePostTitle = styled.section`
  font-size: 15px;
  width: 408px;
`;

const SimplePostSubDataContainer = styled.section`
  width: 30%;
  display: flex;
  justify-content: space-between;
`;

const SimplePostUserId = styled.section`
  font-size: 12px;
`;

const SimplePostCreatedAt = styled.section`
  font-size: 12px;
`;

const SimplePostViewCount = styled.section`
  font-size: 12px;
`;
