import { useInput } from '@/hooks';
import { useDeleteGuestNoteMutation, useEditGuestNoteMutation } from '@/hooks/query/guestNote';
import { QueryKey } from '@/lib/constants';
import { ColorMap } from '@/lib/constants/color';
import styled from '@emotion/styled';
import React from 'react';
import { useState } from 'react';
import { useQueryClient } from 'react-query';
import { ButtonGroup, Profile, Spacing } from '../common';

interface NoteProps {
  id: string;
  homepeeId: string;
  memberId: number;
  name: string;
  profileImage: string;
  createdAt: string;
  content: string;
  isHomepeeHost: boolean;
  isMine: boolean;
}

type NoteType = 'normal' | 'edit';

export const Note = ({ id, homepeeId, name, profileImage, content, createdAt, isHomepeeHost, isMine, memberId }: NoteProps) => {
  const [type, setType] = useState<NoteType>('normal');
  const [value, onValueChange] = useInput(content);

  const editGuestNoteMutation = useEditGuestNoteMutation();
  const deleteGuestMutation = useDeleteGuestNoteMutation();

  const queryClient = useQueryClient();

  const onTypeChange = () => {
    setType(type === 'normal' ? 'edit' : 'normal');
  };

  const onSuccess = () => {
    queryClient.invalidateQueries([QueryKey.GetGuestNotes, Number(homepeeId)]);
  };

  return (
    <NoteContainer>
      <NoteInfo>
        <Profile size="small" imageURL={profileImage} />
        <Spacing horizon={7} />

        <div className="note-info">
          <span>{name}</span>
          <Spacing horizon={5} />
          <span>{createdAt.split(' ')[0]}</span>
        </div>
      </NoteInfo>

      <Spacing vertical={16} />

      {isHomepeeHost || isMine ? (
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
                        editGuestNoteMutation.mutate(
                          {
                            guestNoteId: id,
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
                        { guestNoteId: String(id), homepeeId: String(homepeeId) },
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
    </NoteContainer>
  );
};

const NoteContainer = styled.div`
  margin: 16px 12px;
`;

const NoteInfo = styled.div`
  display: flex;
  align-items: flex-end;

  & .note-info {
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
