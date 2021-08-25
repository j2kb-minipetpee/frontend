import React from 'react';
import styled from '@emotion/styled';
import { ColorMap } from '@/lib/constants/color';

interface DividerProps {
  type: 'row' | 'column';
  color?: string;
  width?: number;
}

export const Divider = ({ type, color, width = 1 }: DividerProps) => {
  return <DividerContainer type={type} color={color} width={width} />;
};

const DividerContainer = styled.div<DividerProps>`
  background-color: ${({ color }) => color || ColorMap.GREY100};
  width: ${({ type, width }) => (type === 'column' ? `${width}px` : '100%')};
  height: ${({ type, width }) => (type === 'column' ? `100%` : `${width}px`)};
`;
