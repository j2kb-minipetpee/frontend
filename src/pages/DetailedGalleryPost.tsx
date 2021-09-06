import { HomepeeLayout } from '@/layout/HomepeeLayout';
import styled from '@emotion/styled';
import React from 'react';
import profileLogo from '@/assets/images/default_profile_small.png';

export const DetailedGalleryPost = () => {
  return (
    <HomepeeLayout>
      <DetailedGalleryPostContainer>
        <DetailedGalleryPostHeader>
          <DetailedGalleryPostProfileWrapper>
            <DetailedGalleryPostProfileImage src={profileLogo} />
            <span>초코</span>
          </DetailedGalleryPostProfileWrapper>
          <div>제목</div>
          <div>날짜</div>
          <div>조회수</div>
        </DetailedGalleryPostHeader>
      </DetailedGalleryPostContainer>
    </HomepeeLayout>
  );
};

const DetailedGalleryPostContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const DetailedGalleryPostProfileWrapper = styled.section``;
const DetailedGalleryPostProfileImage = styled.img``;
const DetailedGalleryPostHeader = styled.section`
  width: 100%;
  display: flex;
`;
