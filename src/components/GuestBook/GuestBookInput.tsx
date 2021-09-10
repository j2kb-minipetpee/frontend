import { useInput } from '@/hooks';
import { useAddGuestBookMutation } from '@/hooks/query/guestBook';
import { QueryKey } from '@/lib/constants';
import { ColorMap } from '@/lib/constants/color';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { Button, Spacing } from '../common';

type SelectedBookType = 'normal' | 'secret';

interface GuestBookInputProps {
  memberId: number;
  homepeeId: string;
}

export const GuestBookInput = ({ memberId, homepeeId }: GuestBookInputProps) => {
  const [selectedBookType, setSelectedBookType] = useState<SelectedBookType>('normal');
  const [content, onContentChange, reset] = useInput<HTMLTextAreaElement>('');
  const queryClient = useQueryClient();

  const addGuestBookMutation = useAddGuestBookMutation();

  const onSelectedBookTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedBookType(e.target.value as SelectedBookType);
  };

  const onGuestBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addGuestBookMutation.mutate(
      { content, visible: selectedBookType === 'normal', memberId, homepeeId },
      {
        onSuccess: () => {
          reset();
          queryClient.invalidateQueries([QueryKey.GetGuestBooks, Number(homepeeId)]);
        },
      },
    );
  };

  return (
    <GuestBookInputWrapper>
      <form onSubmit={onGuestBookSubmit}>
        <TypeLabelWrapper>
          <Input id="normal" type="radio" value="normal" name="Book-type" onChange={onSelectedBookTypeChange} checked={selectedBookType === 'normal'} hidden />
          <label htmlFor="normal">일반글</label>
          <Spacing horizon={13} />

          <Input id="secret" type="radio" value="secret" name="Book-type" onChange={onSelectedBookTypeChange} checked={selectedBookType === 'secret'} hidden />
          <label htmlFor="secret">비밀글</label>
        </TypeLabelWrapper>

        <Spacing vertical={9} />

        <TextArea value={content} onChange={onContentChange} />
        <Spacing vertical={8} />
        <ButtonWrapper>
          <Button text="업로드" color="EMERALD100" />
        </ButtonWrapper>
      </form>
    </GuestBookInputWrapper>
  );
};

const GuestBookInputWrapper = styled.div`
  margin-bottom: 24px;
`;

const TypeLabelWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Input = styled.input`
  & + label {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    width: 76px;
    height: 30px;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.075rem;
    padding: 12px;
    line-height: 12px;

    border: 1px solid ${ColorMap.GREY70};
    border-radius: 4px;
    background: ${ColorMap.WHITE100};
    color: ${ColorMap.GREY100};

    cursor: pointer;
  }

  &:checked + label {
    color: ${ColorMap.EMERALD100};
  }
`;

const TextArea = styled.textarea`
  width: 544px;
  height: 200px;
  padding: 12px;
  resize: none;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
