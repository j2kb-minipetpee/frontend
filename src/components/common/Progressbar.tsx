import { ColorMap } from '@/lib/constants/color';
import styled from '@emotion/styled';
import React from 'react';

export interface ProgressBarProps {
  percent: number;
}

export const ProgressBar = ({ percent }: ProgressBarProps) => {
  return (
    <ProgressBarContainer>
      <Percent percent={percent} />
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div`
  position: relative;
  height: 12px;
  background: ${ColorMap.GREY100};
  border: none;
  border-radius: 6px;
`;

const Percent = styled.div<ProgressBarProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ percent }) => `${percent}%`};
  height: 12px;
  border-radius: 6px;
  border-top-right-radius: ${({ percent }) => (percent === 100 ? '6px' : 0)};
  border-bottom-right-radius: ${({ percent }) => (percent === 100 ? '6px' : 0)};

  background: ${ColorMap.EMERALD100};
`;
