import { useGetBoardPostQuery } from '@/hooks';
import { HomepeeLayout } from '@/layout/HomepeeLayout';
import { useHistory, useParams } from 'react-router-dom';
import { ColorMap } from '@/lib/constants/color';
import React from 'react';
import styled from '@emotion/styled';

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
            <button onClick={() => history.goBack()}>뒤로가기</button>
            <div>
              <button>수정</button>
              <button>삭제</button>
            </div>
          </DetailedBoardPostHeader>
          <h3>{data.title}</h3>
          <DetailedBoardPostSubInfo>
            <h4> {homepeeId} </h4>
            <h4> {data.createdAt} </h4>
            <h4> {data.viewCount}</h4>
          </DetailedBoardPostSubInfo>
          <DetailedBoardPostImage src={data.image.url} />
          <DetailedBoardPostContent>{data.content}</DetailedBoardPostContent>
          <DetailedBoardPostCommentContainer>
            <DetailedBoardPostCommentHeader>댓글</DetailedBoardPostCommentHeader>
            <DetailedBoardPostCommentContentsContainer>
              <div>
                <span>작성자</span>
                <span> 댓글 내용</span>
              </div>
              <div>
                <span>작성자</span>
                <span> 댓글 내용</span>
              </div>
              <div>
                <span>작성자</span>
                <span> 댓글 내용</span>
              </div>
              <div>
                <span>작성자</span>
                <span> 댓글 내용</span>
              </div>
              <div>
                <span>작성자</span>
                <span> 댓글 내용</span>
              </div>
              <div>
                <span>작성자</span>
                <span> 댓글 내용</span>
              </div>
            </DetailedBoardPostCommentContentsContainer>
            <button>댓글 더보기</button>
          </DetailedBoardPostCommentContainer>
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
`;

const DetailedBoardPostSubInfo = styled.section`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const DetailedBoardPostImage = styled.img``;

const DetailedBoardPostContent = styled.article`
  width: 50%;
  height: auto;
`;

const DetailedBoardPostCommentContainer = styled.section`
  width: 50%;
  height: auto;
`;
const DetailedBoardPostCommentHeader = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const DetailedBoardPostCommentContentsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
