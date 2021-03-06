import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useAddBoardPostMutation } from '@/hooks';
import { HomepeeLayout } from '@/layout/HomepeeLayout';
import { useHistory, useParams } from 'react-router-dom';
import { ImageUploader } from '@/components';
import { ColorMap } from '@/lib/constants/color';
import { useBoardPostValidate } from '@/hooks/usePostValidate';

export const WriteBoardPost = () => {
  const [writeTitle, setWriteTitle] = useState('');
  const [writeContent, setWriteContent] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const addBoardPostMutation = useAddBoardPostMutation();

  const handleWriteTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWriteTitle(e.target.value);
  };

  const handleWriteContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWriteContent(e.target.value);
  };

  const handleImageChange = (targetImageUrl: string) => {
    setImageUrl(targetImageUrl);
  };

  const handleImageRemove = () => {
    setImageUrl('');
  };

  const handleClick = () => {
    useBoardPostValidate(writeTitle, writeContent)
      ? addBoardPostMutation.mutate(
          { title: writeTitle, content: writeContent, homepeeId: Number(id), visible: true, image: imageUrl ? imageUrl : '' },
          {
            onSuccess: () => {
              alert('게시글을 등록하였습니다. ');
              history.goBack();
            },
            onError: () => {
              alert('등록에 실패하였습니다.');
            },
          },
        )
      : alert('제목 및 내용을 입력해주세요');
  };

  return (
    <HomepeeLayout>
      <WriteContainer>
        <WriteTitle placeholder="제목" onChange={handleWriteTitleChange} />
        <BoardPostImageWrapper>
          <ImageUploader width="592px" height="383px" handleImageChange={handleImageChange} handleImageRemove={handleImageRemove} />
        </BoardPostImageWrapper>
        <WriteContent rows={30} onChange={handleWriteContentChange} />
        <WriteButtonWrapper>
          <WriteButton onClick={handleClick}>업로드</WriteButton>
        </WriteButtonWrapper>
      </WriteContainer>
    </HomepeeLayout>
  );
};

const WriteContainer = styled.section`
  width: 592px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 339px;
`;

const WriteTitle = styled.input`
  width: 447px;
  height: 35px;
  padding-left: 17px;
  font-size: 16px;
  color: ${ColorMap.GREY70};
  background: ${ColorMap.WHITE80};
  margin-top: 33px;
  border: 0;
  border-bottom: 2px solid;
  outline: none;
  margin-bottom: 15px;
`;

const WriteContent = styled.textarea`
  width: 100%;
  height: 400px;
  vertical-align: top;
  margin-top: 18px;
  resize: none;
  font-size: 16px;
  outline: none;
`;

const WriteButtonWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 36px;
`;

const WriteButton = styled.button`
  width: 65px;
  height: 30px;
  background: ${ColorMap.EMERALD100};
  color: ${ColorMap.WHITE100};
  border-radius: 4px;
`;

const BoardPostImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
