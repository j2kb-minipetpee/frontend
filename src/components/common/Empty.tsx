import styled from '@emotion/styled';
import React from 'react';
import defaultImg from '@/assets/images/empty_bowl.png';

export const Empty = () => {
  return (
    <EmptyContainer>
      <EmptyWrapper>
        <EmptyImg src={defaultImg} />
        <EmptyText>데이터가 없어요.</EmptyText>
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
