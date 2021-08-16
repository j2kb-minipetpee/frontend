import React from 'react';
import styled from '@emotion/styled';

interface DividerProps {
  type: 'row' | 'column';
}

export const Divider = ({ type }: DividerProps) => {
  return <DividerContainer type={type} />;
};

const DividerContainer = styled.div<DividerProps>`
  background-color: lightgray;
  width: ${({ type }) => (type === 'column' ? `1px` : '100%')};
  height: ${({ type }) => (type === 'column' ? `100%` : `1px`)};
`;
