import React from 'react';
import logo from '@/assets/images/logo.png';
import styled from '@emotion/styled';

interface LogoProps {
  width?: number;
  height?: number;
}

export const Logo = ({ width = 200, height = 150 }: LogoProps) => {
  return (
    <LogoContainer width={width} height={height}>
      <img src={logo} alt="logo" />
    </LogoContainer>
  );
};

const LogoContainer = styled.div<LogoProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};

  & img {
    width: 100%;
    height: 100%;
  }
`;
