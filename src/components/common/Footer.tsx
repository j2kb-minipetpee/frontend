import React from 'react';
import styled from '@emotion/styled';
import { ColorMap } from '@/lib/constants/color';

export const Footer = () => {
  return <FooterContainer>@copyright 미니펫피</FooterContainer>;
};

const FooterContainer = styled.footer`
  position: fixed;
  width: 100%;
  height: 50px;
  bottom: 0;
  background: ${ColorMap.GREY100};
  color: ${ColorMap.WHITE100};
  padding: 1rem;
  font-size: 13px;
`;
