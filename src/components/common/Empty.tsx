import styled from '@emotion/styled';
import React from 'react';
import defaultImg from '@/assets/images/empty_bowl.png';

interface EmptyType {
  text: string;
}

export const Empty = ({ text }: EmptyType) => {
  return (
    <EmptyContainer>
      <EmptyWrapper>
        <EmptyImg src={defaultImg} />
        <EmptyText>{text} is Empty </EmptyText>
      </EmptyWrapper>
    </EmptyContainer>
  );
};

const EmptyContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-top: 250px; ;
`;

const EmptyImg = styled.img`
  width: 20%;
  object-fit: contain;
`;

const EmptyText = styled.div`
  font-size: 30px;
  font-weight: 800;
  margin-top: 20px;
`;
