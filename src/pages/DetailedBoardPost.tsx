import { useGetBoardPostQuery } from '@/hooks';
import { HomepeeLayout } from '@/layout/HomepeeLayout';
import { useHistory, useParams } from 'react-router-dom';
import { ColorMap } from '@/lib/constants/color';
import React from 'react';
import styled from '@emotion/styled';
import Backbtn from '@/assets/images/back_big.png';
import { ButtonGroup } from '@/components';
import { CommentLayout } from '@/layout/CommentLayout';
import { NextButton } from '@/components/common/NextButton';

interface paramsType {
  id: string;
  postId: string;
}

export const DetailedBoardPost = () => {
  const params = useParams<paramsType>();
  const history = useHistory();
  const { id: homepeeId, postId } = params;

  const { isLoading, data } = useGetBoardPostQuery({ homepeeId, postId });
  console.log(data);

  return (
    <HomepeeLayout>
      {!isLoading && (
        <DetailedBoardPostContainer>
          <DetailedBoardPostHeader>
            <div onClick={() => history.goBack()}>
              <img src={Backbtn} />
            </div>
            <ButtonGroup size="large" buttons={[{ text: '수정' }, { text: '삭제' }]}></ButtonGroup>
          </DetailedBoardPostHeader>
          <DetailedBoardPostTitle>{data.title}</DetailedBoardPostTitle>
          <DetailedBoardPostSubInfo>
            <h4> {homepeeId} </h4>
            <h4> {data.createdAt} </h4>
            <h4> {data.viewCount}</h4>
          </DetailedBoardPostSubInfo>
          <DetailedBoardPostImage src={data.image.url} />
          <DetailedBoardPostContent>{data.content}</DetailedBoardPostContent>
          <CommentLayout />
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
