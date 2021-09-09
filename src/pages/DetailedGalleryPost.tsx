import styled from '@emotion/styled';
import React from 'react';
import profileLogo from '@/assets/images/default_profile_small.png';
import { ButtonGroup } from '@/components';
import { CommentLayout } from '@/layout/CommentLayout';
import { useAuth, useDeleteGalleryPostMutation } from '@/hooks';
import { useHistory, useParams } from 'react-router';
import { GalleryPost } from '@/lib/model';
import { useGetCommentQuery } from '@/hooks/query/comment';

export const DetailedGalleryPost = ({ id: postId, title, images, comments }: GalleryPost) => {
  const myInfo = useAuth();
  const { id: homepeeId } = useParams<{ id: string }>();
  const history = useHistory();
  const numHomepeeId = Number(homepeeId);
  const numpostId = Number(postId);

  const comment = useGetCommentQuery({ homepeeId: Number(homepeeId), postId: Number(postId) });
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
        {myInfo.id === Number(homepeeId) && (
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
          <DetailedPostBigImage src={images[0].url}></DetailedPostBigImage>
          <DetailedPostSmallImagesWrapper>
            {images.map((image, idx) => {
              if (idx) {
                return <DetailedPostSmallImage src={image.url} key={image.id} />;
              }
            })}
          </DetailedPostSmallImagesWrapper>
        </DetailedGalleryImagesWrapper>
        {comment?.data && <CommentLayout commentList={comment?.data?.pages.flatMap((data) => data.content)} postId={numpostId} />}
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
  margin-top: ${({ isMyHomepee }) => (isMyHomepee ? '20px' : '100px')};
  // 나중에 지우기
  border: 1px solid;
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
`;

const DetailedGalleryImagesWrapper = styled.section`
  width: 100%;
  height: 370px;
  border: 1px solid;
  display: flex;
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
  width: 50%;
  height: 50%;
`;
