import { ColorMap } from '@/lib/constants/color';
import styled from '@emotion/styled';
import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <AuthLayoutContainer>{children}</AuthLayoutContainer>;
};

const AuthLayoutContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${ColorMap.WHITE80};
`;
