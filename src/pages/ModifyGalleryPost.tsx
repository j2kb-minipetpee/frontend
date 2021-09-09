import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { ColorMap } from '@/lib/constants/color';
import { Button, ImageUploader } from '@/components';
import { HomepeeLayout } from '@/layout/HomepeeLayout';
import { useEditGalleryPostMutation, useGetGalleryAllPostQuery } from '@/hooks';
import { useHistory, useParams } from 'react-router';

export const ModifyGalleryPost = () => {
  const { id: homepeeId, postId } = useParams<{ id: string; postId: string }>();
  const targetHomepeeId = Number(homepeeId);
  const history = useHistory();
  const [imageUrlList, setImageUrlList] = useState(null);
  const [postTitle, setPostTitle] = useState(null);

  const getGalleryAllPostQuery = useGetGalleryAllPostQuery({ homepeeId: targetHomepeeId });
  const editGalleryPostMutation = useEditGalleryPostMutation();

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
    console.log(e.target.value);
    setPostTitle(e.target.value);
  };

  // '' 인 경우도 테스트 해보기
  const filterNullImage = (urlList: any[]) => {
    return urlList.filter((url) => url !== undefined && url != null);
  };

  const handleClick = () => {
    const targetImageList = filterNullImage(imageUrlList);
    console.log(targetImageList, 'asdfasdf');
    console.log({ homepeeId: Number(homepeeId), id: Number(postId), images: targetImageList, title: postTitle });

    editGalleryPostMutation.mutate(
      {
        homepeeId: Number(homepeeId),
        id: Number(postId),
        images: targetImageList,
        title: postTitle,
      },
      {
        onSuccess: () => {
          alert('게시글을 수정하였습니다.');
          history.goBack();
        },
      },
    );
  };

  return (
    <HomepeeLayout>
      {getGalleryAllPostQuery.data && (
        <WriteGalleryPostContainer>
          <WriteGalleryPostTitle placeholder="제목" onChange={handlePostTitleChange} defaultValue={targetData.title} />
          <WriteGalleryPostImagesWrapper>
            <ImageUploader
              width="370px"
              height="370px"
              handleImageChange={handleImageChange}
              handleImageRemove={handleImageRemove}
              src={getGalleryAllPostQuery.data || ''}
              id={1}
            ></ImageUploader>
            <WriteGalleryPostSmallImagesWrapper>
              <ImageUploader
                width="185px"
                height="185px"
                handleImageChange={handleImageChange}
                handleImageRemove={handleImageRemove}
                src={targetUrlList[1] || ''}
                id={2}
              ></ImageUploader>
              <ImageUploader
                width="185px"
                height="185px"
                handleImageChange={handleImageChange}
                handleImageRemove={handleImageRemove}
                src={targetUrlList[2] || ''}
                id={3}
              ></ImageUploader>
              <ImageUploader
                width="185px"
                height="185px"
                handleImageChange={handleImageChange}
                handleImageRemove={handleImageRemove}
                src={targetUrlList[3] || ''}
                id={4}
              ></ImageUploader>
              <ImageUploader
                width="185px"
                height="185px"
                handleImageChange={handleImageChange}
                handleImageRemove={handleImageRemove}
                src={targetUrlList[4] || ''}
                id={5}
              ></ImageUploader>
            </WriteGalleryPostSmallImagesWrapper>
          </WriteGalleryPostImagesWrapper>
          <WriteGalleryPostButtonWrapper>
            <Button color="EMERALD100" text="수정하기" onClick={handleClick} />
          </WriteGalleryPostButtonWrapper>
        </WriteGalleryPostContainer>
      )}
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
