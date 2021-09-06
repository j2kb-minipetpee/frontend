import styled from '@emotion/styled';
import React from 'react';

interface HomepeeTitleProps {
  title: string;
}

export const HomepeeTitle = ({ title }: HomepeeTitleProps) => {
  return <Title>{title}</Title>;
};

const Title = styled.h2`
  font-size: 23px;
  color: #70757c;
`;
