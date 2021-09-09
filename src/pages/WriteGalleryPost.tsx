import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ColorMap } from '@/lib/constants/color';
import { Button, ImageUploader } from '@/components';
import { HomepeeLayout } from '@/layout/HomepeeLayout';
import { useAddGalleryPostMutation } from '@/hooks';
import { useHistory, useParams } from 'react-router';

export const WriteGalleryPost = () => {
  const [imageUrlList, setImageUrlList] = useState([null, null, null, null, null]);
  const [postTitle, setPostTitle] = useState(null);
  const { id } = useParams<{ id: string }>();
  const addGalleryPostMutation = useAddGalleryPostMutation();
  const history = useHistory();

  const handleImageChange = (imageUrl: string, targetDOMId: number) => {
    if (imageUrl && targetDOMId) {
      const newImageUrlList = [...imageUrlList];
      newImageUrlList[targetDOMId - 1] = imageUrl;
      setImageUrlList(newImageUrlList);
    }
  };

  const handleImageRemove = (targetDOMId: number) => {
    const newImageUrlList = [...imageUrlList];
    newImageUrlList[targetDOMId - 1] = null;
    setImageUrlList(newImageUrlList);
  };

  const handlePostTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostTitle(e.target.value);
  };

  const filterNullImage = (urlList: any[]) => {
    return urlList.filter((url) => url !== null);
  };

  const handleClick = () => {
    const targetImageList = filterNullImage(imageUrlList);
    addGalleryPostMutation.mutate(
      { title: postTitle, images: targetImageList, homepeeId: Number(id) },
      {
        onSuccess: () => {
          alert('게시글을 작성하였습니다.'), history.goBack();
        },
      },
    );
  };

  return (
    <HomepeeLayout>
      <WriteGalleryPostContainer>
        <WriteGalleryPostTitle placeholder="제목" onChange={handlePostTitleChange} />
        <WriteGalleryPostImagesWrapper>
          <ImageUploader width="370px" height="370px" handleImageChange={handleImageChange} handleImageRemove={handleImageRemove} id={1}></ImageUploader>
          <WriteGalleryPostSmallImagesWrapper>
            <ImageUploader width="185px" height="185px" handleImageChange={handleImageChange} handleImageRemove={handleImageRemove} id={2}></ImageUploader>
            <ImageUploader width="185px" height="185px" handleImageChange={handleImageChange} handleImageRemove={handleImageRemove} id={3}></ImageUploader>
            <ImageUploader width="185px" height="185px" handleImageChange={handleImageChange} handleImageRemove={handleImageRemove} id={4}></ImageUploader>
            <ImageUploader width="185px" height="185px" handleImageChange={handleImageChange} handleImageRemove={handleImageRemove} id={5}></ImageUploader>
          </WriteGalleryPostSmallImagesWrapper>
        </WriteGalleryPostImagesWrapper>
        <WriteGalleryPostButtonWrapper>
          <Button color="EMERALD100" text="글쓰기" onClick={handleClick} />
        </WriteGalleryPostButtonWrapper>
      </WriteGalleryPostContainer>
    </HomepeeLayout>
  );
};

const WriteGalleryPostContainer = styled.section`
  width: 740px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 56px 270px 0 270px;
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
  height: 370px;
  display: flex;
  margin-top: 44px;
`;

const WriteGalleryPostSmallImagesWrapper = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const WriteGalleryPostButtonWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 37px;
`;
