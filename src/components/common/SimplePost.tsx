import { routes } from '@/lib/constants/routes';
import { SimplifiedPost } from '@/lib/model';
import styled from '@emotion/styled';
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export const SimplePost = ({
  post: {
    id,
    title,
    createdAt,
    image: { id: imageId, url: imageUrl },
  },
}: any) => {
  const { url } = useRouteMatch();

  return (
    <SimplePostContainer>
      <SimplePostImage src={imageUrl} />
      <SimplePostTitle>
        <Link to={`${url}/${id}`}>{title}</Link>
      </SimplePostTitle>
      <SimplePostSubDataContainer>
        <SimplePostUserId>유저Id</SimplePostUserId>
        <SimplePostCreatedAt>{createdAt}</SimplePostCreatedAt>
        <SimplePostViewCount>Simple</SimplePostViewCount>
      </SimplePostSubDataContainer>
    </SimplePostContainer>
  );
};

const SimplePostContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
`;

const SimplePostImage = styled.img`
  width: 95px;
  height: 95px;
  border-radius: 50%;
`;

const SimplePostTitle = styled.section`
  font-size: 15px;
`;

const SimplePostSubDataContainer = styled.section`
  width: 30%;
  display: flex;
  justify-content: space-between;
`;

const SimplePostUserId = styled.section`
  font-size: 15px;
`;

const SimplePostCreatedAt = styled.section`
  font-size: 15px;
`;

const SimplePostViewCount = styled.section`
  font-size: 15px;
`;
