import { ImageUploader } from '@/components';
import { useEditBoardPostMutation, useGetBoardPostQuery } from '@/hooks';
import { HomepeeLayout } from '@/layout/HomepeeLayout';
import { ColorMap } from '@/lib/constants/color';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import styled from '@emotion/styled';
import { useBoardPostValidate } from '@/hooks/usePostValidate';

export const ModifyBoardPost = () => {
  const [postTitle, setPostTitle] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [content, setContent] = useState(null);
  const history = useHistory();
  const { id: homepeeId, postId } = useParams<{ id: string; postId: string }>();
  const { data } = useGetBoardPostQuery({ homepeeId: Number(homepeeId), postId: Number(postId) });
  const editBoardPostMutation = useEditBoardPostMutation();
  console.log(data);

  useEffect(() => {
    if (data) {
      setPostTitle(data.title);
      setImgUrl(data.image.url);
      setContent(data.content);
    }
  }, [data]);

  const handleWriteTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostTitle(e.target.value);
  };

  const handleImageChange = (imageUrl: string) => {
    setImgUrl(imageUrl);
  };

  const handleWriteContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleImageRemove = () => {
    setImgUrl(null);
  };

  const handleClick = () => {
    useBoardPostValidate(postTitle, content)
      ? editBoardPostMutation.mutate(
          {
            homepeeId: Number(homepeeId),
            postId: Number(postId),
            content,
            image: {
              id: data.image.id,
              url: imgUrl,
            },
            title: postTitle,
          },
          {
            onSuccess: () => {
              alert('수정하였습니다.');
              history.goBack();
            },
          },
        )
      : alert('제목 및 내용을 입력해주세요');
  };

  return (
    <HomepeeLayout>
      {data && (
        <WriteContainer>
          <WriteTitle placeholder="제목" defaultValue={data.title} onChange={handleWriteTitleChange} />
          <ImageUploader width="100%" height="370px" handleImageChange={handleImageChange} handleImageRemove={handleImageRemove} src={data.image.url} />
          <WriteContent rows={30} defaultValue={data.content} onChange={handleWriteContentChange} />
          <WriteButtonWrapper>
            <WriteButton onClick={handleClick}>수정하기</WriteButton>
          </WriteButtonWrapper>
        </WriteContainer>
      )}
    </HomepeeLayout>
  );
};

const WriteContainer = styled.section`
  width: 663px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 339px;
`;

const WriteTitle = styled.input`
  width: 100%;
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
