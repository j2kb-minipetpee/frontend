import { ColorMap } from '@/lib/constants/color';
import styled from '@emotion/styled';
import React from 'react';
import { useHistory } from 'react-router-dom';

export const DetailedPostLayout = () => {
  const history = useHistory();
  return (
    <DetailedPostContainer>
      <DetailedPostHeader>
        <button onClick={() => history.goBack()}>뒤로가기</button>
        <div>
          <button>수정</button>
          <button>삭제</button>
        </div>
      </DetailedPostHeader>
      <h3>글 제 목</h3>
      <DetailedPostSubInfo>
        <h4> 작성자 </h4>
        <h4> 날짜 </h4>
        <h4> 조회 수</h4>
      </DetailedPostSubInfo>
      <DetailedPostContent>여기는 바로 컨텐츠 자리입니다 </DetailedPostContent>
      <DetailedPostCommentContainer>
        <DetailedPostCommentHeader>댓글</DetailedPostCommentHeader>
        <DetailedPostCommentContentsContainer>
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
        </DetailedPostCommentContentsContainer>
        <button>댓글 더보기</button>
      </DetailedPostCommentContainer>
    </DetailedPostContainer>
  );
};

const DetailedPostContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background: ${ColorMap.GREY70};
  align-items: center;
`;

const DetailedPostHeader = styled.section`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 0, 0, 0.1);
`;

const DetailedPostSubInfo = styled.section`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const DetailedPostContent = styled.article`
  width: 50%;
  height: auto;
`;

const DetailedPostCommentContainer = styled.section`
  width: 50%;
  height: auto;
`;
const DetailedPostCommentHeader = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const DetailedPostCommentContentsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
