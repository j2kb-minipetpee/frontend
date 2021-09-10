import React from 'react';
import loading from '@/assets/images/loading.gif';
import styled from '@emotion/styled';

interface LoadingProps {
  width?: number;
}

export const Loading = ({ width }: LoadingProps) => {
  return (
    <LoadingContainer width={width}>
      <img src={loading} alt="loading" />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div<{ width: number }>`
  width: ${({ width }) => `${width || 260}px`};

  & img {
    width: 100%;
  }
`;
