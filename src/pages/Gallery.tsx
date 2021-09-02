import React from 'react';
import { PostListLayout } from '@/layout/PostListLayout';
import { SimplifiedPost } from '@/lib/model';
import { HomepeeLayout } from '../layout/HomepeeLayout';

export const Gallery = () => {
  return (
    <HomepeeLayout>
      <PostListLayout postList={dummyData} />
    </HomepeeLayout>
  );
};

const dummyData: SimplifiedPost[] = [
  {
    id: 1,
    title: '야옹이 1',
    createdAt: '2021-08-22',
    image: {
      id: 1,
      url: 'https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_280/5-3-%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg',
    },
  },
  {
    id: 2,
    title: '야옹이 2',
    createdAt: '2021-08-22',
    image: {
      id: 2,
      url: 'https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_280/5-3-%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg',
    },
  },
  {
    id: 3,
    title: '야옹이 ',
    createdAt: '2021-08-22',
    image: {
      id: 3,
      url: 'https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_280/5-3-%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg',
    },
  },
  {
    id: 4,
    title: '야옹이 ',
    createdAt: '2021-08-22',
    image: {
      id: 3,
      url: 'https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_280/5-3-%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg',
    },
  },
  {
    id: 5,
    title: '야옹이 ',
    createdAt: '2021-08-22',
    image: {
      id: 3,
      url: 'https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_280/5-3-%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg',
    },
  },
  {
    id: 6,
    title: '야옹이 ',
    createdAt: '2021-08-22',
    image: {
      id: 3,
      url: 'https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_280/5-3-%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg',
    },
  },
  {
    id: 7,
    title: '야옹이 ',
    createdAt: '2021-08-22',
    image: {
      id: 3,
      url: 'https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_280/5-3-%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg',
    },
  },
];
