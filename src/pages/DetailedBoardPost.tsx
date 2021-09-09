import { useDeleteBoardPostMutation, useGetBoardPostQuery } from '@/hooks';
import { HomepeeLayout } from '@/layout/HomepeeLayout';
import { useHistory, useParams } from 'react-router-dom';
import { ColorMap } from '@/lib/constants/color';
import React from 'react';
import styled from '@emotion/styled';
import Backbtn from '@/assets/images/back_big.png';
import { ButtonGroup } from '@/components';
import { CommentLayout } from '@/layout/CommentLayout';
import { useGetCommentQuery } from '@/hooks/query/comment';

interface paramsType {
  id: string;
  postId: string;
}

export const DetailedBoardPost = () => {
  const params = useParams<paramsType>();
  const history = useHistory();
  const { id: homepeeId, postId } = params;
  const targetHompee = Number(homepeeId);
  const targetPostId = Number(postId);
  console.log('postId is ', postId);

  const { data } = useGetBoardPostQuery({ homepeeId: targetHompee, postId: targetPostId });
  const comment = useGetCommentQuery({ homepeeId: Number(homepeeId), postId: Number(postId) });
  if (comment?.data?.pages) {
    console.log(comment?.data?.pages.flatMap((data) => console.log(data?.content)));
  }

  const deleteBoardPostMutation = useDeleteBoardPostMutation();

  const handleDeleteClick = () => {
    confirm('삭제하시곘습니까?') &&
      deleteBoardPostMutation.mutate(
        { homepeeId, postId },
        {
          onSuccess: () => {
            alert('삭제하였습니다.');
          },
        },
      );
  };

  const handleModifyClick = () => {
    alert('수정하겠습니다.');
  };

  return (
    <HomepeeLayout>
      {data && (
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
          <DetailedBoardPostTitle>{data.title}</DetailedBoardPostTitle>
          <DetailedBoardPostSubInfo>
            <h4> {homepeeId} </h4>
            <h4> {data.viewCount}</h4>
          </DetailedBoardPostSubInfo>
          <DetailedBoardPostImage src={data.image.url} />
          <DetailedBoardPostContent>{data.content}</DetailedBoardPostContent>
          {comment && <CommentLayout commentList={comment?.data?.pages.flatMap((data) => data.content)} postId={Number(postId)} />}
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
  align-items: center;
  margin-top: 22px;
`;

const DetailedBoardPostImage = styled.img`
  margin-top: 15px;
`;

const DetailedBoardPostContent = styled.article`
  width: 50%;
  height: auto;
  margin-top: 15px;
  text-align: center;
`;
