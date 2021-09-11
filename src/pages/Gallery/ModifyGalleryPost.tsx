import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ColorMap } from '@/lib/constants/color';
import { Button, ImageUploader } from '@/components';
import { HomepeeLayout } from '@/layout/HomepeeLayout';
import { useEditGalleryPostMutation, useGetGalleryTargetPostQuery } from '@/hooks';
import { useHistory, useParams } from 'react-router';
import { useGalleryPostValidate } from '@/hooks/usePostValidate';

export const ModifyGalleryPost = () => {
  const { id: homepeeId, postId } = useParams<{ id: string; postId: string }>();
  const targetHomepeeId = Number(homepeeId);
  const history = useHistory();
  const [imageUrlList, setImageUrlList] = useState([null, null, null, null, null]);
  const [postTitle, setPostTitle] = useState(null);

  const getGalleryTargetPostQuery = useGetGalleryTargetPostQuery({ homepeeId: targetHomepeeId, postId: Number(postId) });
  const editGalleryPostMutation = useEditGalleryPostMutation();

  useEffect(() => {
    if (getGalleryTargetPostQuery.data) {
      setPostTitle(getGalleryTargetPostQuery.data.title);
      setImageUrlList(getGalleryTargetPostQuery.data.images.flatMap((data) => data.url));
    }
  }, [getGalleryTargetPostQuery.data]);

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

  // '' 인 경우도 테스트 해보기
  const filterNullImage = (urlList: any[]) => {
    return urlList.filter((url) => url !== undefined && url != null);
  };

  const handleClick = () => {
    const targetImageList = filterNullImage(imageUrlList);

    useGalleryPostValidate(postTitle, imageUrlList)
      ? editGalleryPostMutation.mutate(
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
        )
      : alert('제목 혹은 1개 이상의 사진을 입력해주세요');
  };
  // map으로 수정 예정
  return (
    <HomepeeLayout>
      {getGalleryTargetPostQuery.data && (
        <WriteGalleryPostContainer>
          <WriteGalleryPostTitle placeholder="제목" onChange={handlePostTitleChange} defaultValue={getGalleryTargetPostQuery.data.title} />
          <WriteGalleryPostImagesWrapper>
            <ImageUploader
              width="370px"
              height="370px"
              handleImageChange={handleImageChange}
              handleImageRemove={handleImageRemove}
              src={getGalleryTargetPostQuery.data.images[0]?.url || ''}
              id={1}
            ></ImageUploader>
            <WriteGalleryPostSmallImagesWrapper>
              <ImageUploader
                width="185px"
                height="185px"
                handleImageChange={handleImageChange}
                handleImageRemove={handleImageRemove}
                src={getGalleryTargetPostQuery.data.images[1]?.url || ''}
                id={2}
              ></ImageUploader>
              <ImageUploader
                width="185px"
                height="185px"
                handleImageChange={handleImageChange}
                handleImageRemove={handleImageRemove}
                src={getGalleryTargetPostQuery.data.images[2]?.url || ''}
                id={3}
              ></ImageUploader>
              <ImageUploader
                width="185px"
                height="185px"
                handleImageChange={handleImageChange}
                handleImageRemove={handleImageRemove}
                src={getGalleryTargetPostQuery.data.images[3]?.url || ''}
                id={4}
              ></ImageUploader>
              <ImageUploader
                width="185px"
                height="185px"
                handleImageChange={handleImageChange}
                handleImageRemove={handleImageRemove}
                src={getGalleryTargetPostQuery.data.images[4]?.url || ''}
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
