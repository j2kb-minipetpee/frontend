import { SearchType } from '@/lib/model';
import styled from '@emotion/styled';
import React from 'react';
import { Spacing } from '../common';

export const MainText = ({ type }: { type: SearchType }) => {
  if (type === 'popular') {
    return (
      <MainTextContainer>
        <h2>오늘의 인기 PET</h2>
        <Spacing vertical={11} />
        <div>미니펫피 추천 핫한 게시글</div>
      </MainTextContainer>
    );
  }

  if (type === 'post') {
    return (
      <MainTextContainer>
        <h2>검색한 게시글</h2>
      </MainTextContainer>
    );
  }

  return (
    <MainTextContainer>
      <h2>검색한 PET</h2>
    </MainTextContainer>
  );
};

const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 41px;
`;
