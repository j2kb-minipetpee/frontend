import styled from '@emotion/styled';
import React from 'react';
import profileLogo from '@/assets/images/default_profile_small.png';
import { ButtonGroup } from '@/components';
import { CommentLayout } from '@/layout/CommentLayout';
import { useAuth, useDeleteGalleryPostMutation } from '@/hooks';
import { useHistory, useParams } from 'react-router';
import { GalleryPost } from '@/lib/model';
import defaultImg from '@/assets/images/empty_cat.png';

export const DetailedGalleryPost = ({ id: postId, title, images, comments }: GalleryPost) => {
  const myInfo = useAuth();
  const { id: homepeeId } = useParams<{ id: string }>();
  const history = useHistory();
  const numHomepeeId = Number(homepeeId);
  const numpostId = Number(postId);

  const deleteGalleryPostMutation = useDeleteGalleryPostMutation();

  const handleDeleteClick = () => {
    deleteGalleryPostMutation.mutate(
      { homepeeId: numHomepeeId, postId: numpostId },
      {
        onSuccess: () => {
          alert('게시글이 삭제되었습니다.');
          history.push('/');
        },
      },
    );
  };

  return (
    <DetailedGalleryPostContainer>
      <DetailedPostWrapper isMyHomepee={myInfo.id === Number(homepeeId)}>
        {myInfo?.id === Number(homepeeId) && (
          <DetailedGalleryModifyBtnGroup>
            <ButtonGroup
              size="large"
              buttons={[
                {
                  text: '수정',
                  onClick: () => {
                    history.push(`/homepee/${homepeeId}/gallery/posts/modify/${postId}`);
                  },
                },
                {
                  text: '삭제',
                  onClick: () => handleDeleteClick(),
                },
              ]}
            />
          </DetailedGalleryModifyBtnGroup>
        )}

        <DetailedGalleryPostHeader>
          <DetailedGalleryPostProfileWrapper>
            <DetailedGalleryPostProfileImage src={profileLogo} />
            <div>{myInfo.name}</div>
          </DetailedGalleryPostProfileWrapper>
          <DetailedGalleryPostTitle>{title}</DetailedGalleryPostTitle>
        </DetailedGalleryPostHeader>

        <DetailedGalleryImagesWrapper>
          <DetailedPostBigImage src={images[0]?.url}></DetailedPostBigImage>
          <DetailedPostSmallImagesWrapper>
            <DetailedPostSmallImage src={images[1]?.url || defaultImg} />
            <DetailedPostSmallImage src={images[2]?.url || defaultImg} />
            <DetailedPostSmallImage src={images[3]?.url || defaultImg} />
            <DetailedPostSmallImage src={images[4]?.url || defaultImg} />
          </DetailedPostSmallImagesWrapper>
        </DetailedGalleryImagesWrapper>
        <CommentLayout postId={numpostId} />
      </DetailedPostWrapper>
    </DetailedGalleryPostContainer>
  );
};

const DetailedGalleryPostContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailedPostWrapper = styled.section<{ isMyHomepee: boolean }>`
  width: 740px;
  margin-top: ${({ isMyHomepee }) => (isMyHomepee ? '76px' : '118px')};
`;

const DetailedGalleryModifyBtnGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const DetailedGalleryPostHeader = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
`;

const DetailedGalleryPostProfileWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const DetailedGalleryPostProfileImage = styled.img``;

const DetailedGalleryPostTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 900;
  padding-right: 100px;
`;

const DetailedGalleryImagesWrapper = styled.section`
  width: 100%;
  height: 370px;
  display: flex;
  margin-top: 22px;
`;

const DetailedPostSmallImagesWrapper = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const DetailedPostBigImage = styled.img`
  width: 50%;
  height: 100%;
`;

const DetailedPostSmallImage = styled.img`
  width: 175px;
  height: 175px;
  margin-left: 5px;
  margin-top: 2.5px;
`;
