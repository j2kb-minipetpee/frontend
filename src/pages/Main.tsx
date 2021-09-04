import { MainLayout } from '../layout/MainLayout';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Post } from '@/components/Main/Post';
import styled from '@emotion/styled';
import { useGetPopularPostsQuery } from '@/hooks';

const POSTS = [
  {
    homepeeId: 111,
    post: {
      id: 101,
      title: '루피는 연예인',
      createdAt: '2021-08-24 11:50:08',
      imageUrl: 'postImage1',
      content: '화려한 조명이 루피를 감싸네',
    },
    member: {
      id: 11,
      name: '루피루',
      profileImageUrl: 'rupeeImg1',
    },
  },
  {
    homepeeId: 222,
    post: {
      id: 102,
      title: '루피는 배고파',
      createdAt: '2021-08-24 11:50:08',
      imageUrl: 'postImage2',
      content: '군침이 싸악 도노',
    },
    member: {
      id: 12,
      name: '헝그리 루피',
      profileImageUrl: 'rupeeImg2',
    },
  },
  {
    homepeeId: 333,
    post: {
      id: 103,
      title: '루피 보호 위원회',
      createdAt: '2021-08-24 11:50:08',
      imageUrl: 'postImage3',
      content: '끊임없이 고통 받는 루피를 쉬게 도와주세요!',
    },
    member: {
      id: 13,
      name: '루못미',
      profileImageUrl: 'rupeeImg3',
    },
  },
  {
    homepeeId: 444,
    post: {
      id: 104,
      title: '프론트엔드 짱',
      createdAt: '2021-08-24 11:50:08',
      imageUrl: 'postImage4',
      content: '열정!열정!열정!',
    },
    member: {
      id: 14,
      name: 'moon',
      profileImageUrl: 'yeoljeongImg',
    },
  },
];

export const Main = () => {
  const { data } = useGetPopularPostsQuery();
  const history = useHistory();

  return (
    <MainLayout>
      <PostContainer>
        {data &&
          data.map(({ post, homepeeId, member }) => (
            <Post
              key={post.id}
              name={member.name}
              profileImage={member.profileImageUrl}
              coverImage={post.imageUrl}
              title={post.title}
              description={post.content}
              onClick={() => history.push(`/homepee/${homepeeId}`)}
            ></Post>
          ))}
      </PostContainer>
    </MainLayout>
  );
};

const PostContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 50px 150px;
`;
