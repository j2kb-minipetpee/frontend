import { useInput } from '@/hooks';
import { useDeleteGuestBookMutation, useEditGuestBookMutation } from '@/hooks/query/guestBook';
import { QueryKey } from '@/lib/constants';
import { ColorMap } from '@/lib/constants/color';
import styled from '@emotion/styled';
import React from 'react';
import { useState } from 'react';
import { useQueryClient } from 'react-query';
import { ButtonGroup, Profile, Spacing } from '../common';

interface BookProps {
  id: string;
  homepeeId: string;
  memberId: number;
  name: string;
  profileImage: string;
  visible: boolean;
  createdAt: string;
  content: string;
  isHomepeeHost: boolean;
  isMine: boolean;
}

type BookType = 'normal' | 'edit';

export const Book = ({ id, homepeeId, name, profileImage, visible, content, createdAt, isHomepeeHost, isMine, memberId }: BookProps) => {
  const [type, setType] = useState<BookType>('normal');
  const [value, onValueChange] = useInput(content);

  const editGuestBookMutation = useEditGuestBookMutation();
  const deleteGuestMutation = useDeleteGuestBookMutation();

  const queryClient = useQueryClient();

  const onTypeChange = () => {
    setType(type === 'normal' ? 'edit' : 'normal');
  };

  const onSuccess = () => {
    queryClient.invalidateQueries([QueryKey.GetGuestBooks, Number(homepeeId)]);
  };

  return (
    <BookContainer>
      <BookInfo>
        <Profile size="small" imageURL={profileImage} />
        <Spacing horizon={7} />

        <div className="Book-info">
          <span>{name}</span>
          <Spacing horizon={5} />
          <span>{createdAt.split(' ')[0]}</span>

          {!visible && (
            <>
              <Spacing horizon={12} />
              <span>비밀 글</span>
            </>
          )}
        </div>
      </BookInfo>

      <Spacing vertical={16} />

      {visible || isHomepeeHost || isMine ? (
        <ContentWrapper>
          {type === 'normal' ? content : <TextArea value={value} onChange={onValueChange} />}

          {isMine && (
            <ButtonWrapper>
              <ButtonGroup
                size="large"
                buttons={[
                  {
                    text: '수정',
                    color: type === 'normal' ? 'GREY70' : 'EMERALD100',
                    onClick: () => {
                      if (type === 'edit') {
                        editGuestBookMutation.mutate(
                          {
                            guestBookId: id,
                            homepeeId: homepeeId,
                            memberId,
                            content: value,
                            visible: true,
                          },
                          {
                            onSuccess,
                          },
                        );
                      }

                      onTypeChange();
                    },
                  },
                  {
                    text: '삭제',
                    color: 'GREY70',
                    onClick: () => {
                      deleteGuestMutation.mutate(
                        { guestBookId: String(id), homepeeId: String(homepeeId) },
                        {
                          onSuccess,
                        },
                      );
                    },
                  },
                ]}
              />
            </ButtonWrapper>
          )}
        </ContentWrapper>
      ) : (
        <ContentWrapper>비밀 글 입니다.</ContentWrapper>
      )}
    </BookContainer>
  );
};

const BookContainer = styled.div`
  margin: 16px 12px;
`;

const BookInfo = styled.div`
  display: flex;
  align-items: flex-end;

  & .Book-info {
    display: flex;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  border: 1px solid ${ColorMap.GREY70};
  width: 544px;
  height: 120px;
  padding: 12px;
  font-size: 1rem;
`;

const ButtonWrapper = styled.div`
  margin-left: auto;
  margin-top: auto;
`;

const TextArea = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: 1rem;
`;
