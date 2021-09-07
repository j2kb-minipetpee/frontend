import styled from '@emotion/styled';
import React from 'react';

interface SpacingProps {
  horizon?: number;
  vertical?: number;
}
export const Spacing = ({ horizon = 0, vertical = 0 }: SpacingProps) => {
  return <SpacingContainer horizon={horizon} vertical={vertical}></SpacingContainer>;
};

const SpacingContainer = styled.div<SpacingProps>`
  margin-top: ${({ vertical }) => `${vertical}px`};
  margin-right: ${({ horizon }) => `${horizon}px`};
`;
