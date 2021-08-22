import React from 'react';
import styled from '@emotion/styled';
import { ColorMap } from '@/lib/constants/color';

export const Footer = () => {
  return <FooterContainer>@copyright 미니펫피</FooterContainer>;
};

const FooterContainer = styled.footer`
  margin-top: auto;
  background: ${ColorMap.GREY100};
  color: ${ColorMap.WHITE100};
  padding: 1rem;
  font-size: 13px;
`;
