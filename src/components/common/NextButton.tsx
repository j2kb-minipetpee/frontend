import styled from '@emotion/styled';
import React from 'react';
import { Spacing } from './Spacing';
import nextImage from '@/assets/images/next_large.png';

interface NextButtonProps {
  onClick: (e: React.MouseEvent) => void;
}

export const NextButton = ({ onClick }: NextButtonProps) => {
  return (
    <NextButtonWrapper onClick={onClick}>
      <span>더보기</span>
      <Spacing horizon={4} /> <img src={nextImage} />
    </NextButtonWrapper>
  );
};

const NextButtonWrapper = styled.button`
  border: none;
  background-color: white;
  outline: none;
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-left: auto;
  margin-right: 449px;
`;
