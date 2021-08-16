import React from 'react';
import styled from '@emotion/styled';

export const Footer = () => {
  return <FooterContainer>@copyright 미니펫피</FooterContainer>;
};

const FooterContainer = styled.footer`
  margin-top: auto;
  background: gray;
  color: white;
  padding: 1rem;
  font-size: 13px;
`;
