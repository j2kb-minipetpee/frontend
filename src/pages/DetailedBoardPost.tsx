import { useAuth, useDeleteBoardPostMutation, useGetBoardPostQuery } from '@/hooks';
import { HomepeeLayout } from '@/layout/HomepeeLayout';
import { useHistory, useParams } from 'react-router-dom';
import { ColorMap } from '@/lib/constants/color';
import React from 'react';
import styled from '@emotion/styled';
import Backbtn from '@/assets/images/back_big.png';
import { ButtonGroup } from '@/components';
import { CommentLayout } from '@/layout/CommentLayout';
import defaultImg from '@/assets/images/empty_cat.png';

interface paramsType {
  id: string;
  postId: string;
}

export const DetailedBoardPost = () => {
  const params = useParams<paramsType>();
  const history = useHistory();
  const { id: homepeeId, postId } = params;
  const getBoardPostQuery = useGetBoardPostQuery({ homepeeId: Number(homepeeId), postId: Number(postId) });
  const deleteBoardPostMutation = useDeleteBoardPostMutation();
  const myInfo = useAuth();

  const handleDeleteClick = () => {
    confirm('삭제하시곘습니까?') &&
      deleteBoardPostMutation.mutate(
        { homepeeId, postId },
        {
          onSuccess: () => {
            alert('삭제하였습니다.');
            history.goBack();
          },
        },
      );
  };

  const handleModifyClick = () => {
    history.push(`/homepee/${homepeeId}/board/posts/modify/${postId}`);
  };

  return (
    <HomepeeLayout>
      {getBoardPostQuery.data && (
        <DetailedBoardPostContainer>
          <DetailedBoardPostHeader>
            <div onClick={() => history.goBack()}>
              <img src={Backbtn} />
            </div>
            <ButtonGroup
              size="large"
              buttons={[
                { text: '수정', onClick: handleModifyClick },
                { text: '삭제', onClick: handleDeleteClick },
              ]}
            ></ButtonGroup>
          </DetailedBoardPostHeader>
          <DetailedBoardPostTitle>{getBoardPostQuery.data.title}</DetailedBoardPostTitle>
          <DetailedBoardPostSubInfo>
            <DetailedBoardPostSubInfoChild>{myInfo.name}</DetailedBoardPostSubInfoChild>
            <DetailedBoardPostSubInfoChild>{getBoardPostQuery.data.createdAt.split(' ')[0]}</DetailedBoardPostSubInfoChild>
            <DetailedBoardPostSubInfoChild>{getBoardPostQuery.data.viewCount}</DetailedBoardPostSubInfoChild>
          </DetailedBoardPostSubInfo>
          <DetailedBoardPostImageWrapper>
            <DetailedBoardPostImage src={getBoardPostQuery.data?.image?.url || defaultImg} />
          </DetailedBoardPostImageWrapper>
          <DetailedBoardPostContent>{getBoardPostQuery.data.content}</DetailedBoardPostContent>
          <DetailedBoardPostCommentWrapper>
            <CommentLayout postId={Number(postId)} />
          </DetailedBoardPostCommentWrapper>
        </DetailedBoardPostContainer>
      )}
    </HomepeeLayout>
  );
};

const DetailedBoardPostContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background: ${ColorMap.WHITE80};
  align-items: center;
`;

const DetailedBoardPostHeader = styled.section`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 82px;
`;

const DetailedBoardPostTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
`;

const DetailedBoardPostSubInfo = styled.section`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  margin-top: 22px;
`;
const DetailedBoardPostSubInfoChild = styled.div`
  text-align: center;
  margin-left: 10px;
`;

const DetailedBoardPostImage = styled.img`
  height: 100%;
  object-fit: contain;
`;

const DetailedBoardPostContent = styled.article`
  width: 50%;
  height: auto;
  margin-top: 15px;
  text-align: center;
`;

const DetailedBoardPostCommentWrapper = styled.div`
  width: 50%;
`;

const DetailedBoardPostImageWrapper = styled.div`
  width: 740px;
  margin-top: 15px;
  height: 500px;
  display: flex;
  justify-content: center;
`;
