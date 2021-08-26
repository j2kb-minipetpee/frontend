import { BoardLayout } from '@/layout/BoardLayout';
import { SimplifiedPost } from '@/lib/model';
import styled from '@emotion/styled';
import * as React from 'react';
import { HomepeeLayout } from '../layout/HomepeeLayout';

export const Board = () => {
  return (
    <HomepeeLayout>
      <BoardLayout boardPosts={dummyData}></BoardLayout>
    </HomepeeLayout>
  );
};

const dummyData: SimplifiedPost[] = [
  {
    id: 1,
    title: '멍멍이 1',
    createdAt: '2021-08-22',
    image: {
      id: 1,
      url: 'https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg',
    },
  },
  {
    id: 2,
    title: '멍멍이 2',
    createdAt: '2021-08-22',
    image: {
      id: 2,
      url: 'https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg',
    },
  },
  {
    id: 3,
    title: '뭉뭉이3 ',
    createdAt: '2021-08-22',
    image: {
      id: 3,
      url: 'https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg',
    },
  },
  {
    id: 4,
    title: '뭉뭉이3 ',
    createdAt: '2021-08-22',
    image: {
      id: 3,
      url: 'https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg',
    },
  },
  {
    id: 5,
    title: '뭉뭉이3 ',
    createdAt: '2021-08-22',
    image: {
      id: 3,
      url: 'https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg',
    },
  },
  {
    id: 6,
    title: '뭉뭉이3 ',
    createdAt: '2021-08-22',
    image: {
      id: 3,
      url: 'https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg',
    },
  },
  {
    id: 7,
    title: '뭉뭉이3 ',
    createdAt: '2021-08-22',
    image: {
      id: 3,
      url: 'https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg',
    },
  },
];
