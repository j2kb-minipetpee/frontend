import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ColorMap } from '@/lib/constants/color';
import { Button, ImageUploader } from '@/components';
import { HomepeeLayout } from '@/layout/HomepeeLayout';

export const WriteGalleryPost = () => {
  const [imageUrlList, setImageUrlList] = useState([null, null, null, null, null]);
  const handleImageChange = () => {
    console.log(123);
  };

  return (
    <HomepeeLayout>
      <WriteGalleryPostContainer>
        <WriteGalleryPostTitle placeholder="제목" />
        <WriteGalleryPostImagesWrapper>
          <ImageUploader width="50%" height="100%" handleImageChange={handleImageChange}></ImageUploader>
          <ImageUploader width="25%" height="50%" handleImageChange={handleImageChange}></ImageUploader>
          <ImageUploader width="25%" height="50%" handleImageChange={handleImageChange}></ImageUploader>
          <ImageUploader width="25%" height="50%" handleImageChange={handleImageChange}></ImageUploader>
          <ImageUploader width="25%" height="50%" handleImageChange={handleImageChange}></ImageUploader>
        </WriteGalleryPostImagesWrapper>
        <WriteGalleryPostContent />
      </WriteGalleryPostContainer>
      <Button color="EMERALD100" text="글쓰기" />
    </HomepeeLayout>
  );
};

const WriteGalleryPostContainer = styled.section`
  width: 741px;
  display: flex;
  flex-direction: column;
  margin-top: 56px;
`;

const WriteGalleryPostTitle = styled.input`
  width: 447px;
  padding-left: 17px;
  font-size: 16px;
  color: ${ColorMap.GREY70};
  background: ${ColorMap.WHITE80};
  outline: none;
`;

const WriteGalleryPostImagesWrapper = styled.section`
  width: 100%;
`;

const WriteGalleryPostContent = styled.textarea`
  width: 100%;
  vertical-align: top;
  resize: none;
  font-size: 16px;
  outline: none;
`;
