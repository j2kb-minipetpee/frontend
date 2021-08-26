import React from 'react';
import logo from '@/assets/images/logo.png';
import styled from '@emotion/styled';

interface LogoProps {
  width?: number;
  height?: number;
  onClick?: (e: React.MouseEvent) => void;
}

export const Logo = ({ width = 200, height = 150, onClick }: LogoProps) => {
  return (
    <LogoContainer width={width} height={height} onClick={onClick}>
      <img src={logo} alt="logo" />
    </LogoContainer>
  );
};

const LogoContainer = styled.div<LogoProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  cursor: pointer;

  & img {
    width: 100%;
    height: 100%;
  }
`;
