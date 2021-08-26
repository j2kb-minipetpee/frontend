import React from 'react';
import name from '@/assets/images/name.png';
import styled from '@emotion/styled';
import { ColorMap } from '@/lib/constants/color';

interface UserNameProps {
  name: string;
}

export const UserName = ({ name }: UserNameProps) => {
  return (
    <UserNameConatiner>
      <NameWrapper>{name}</NameWrapper>
    </UserNameConatiner>
  );
};

const UserNameConatiner = styled.div`
  position: relative;
  width: 120px;
  height: 40px;
  background-image: url(${name});
  background-repeat: no-repeat;
`;

const NameWrapper = styled.div`
  position: absolute;
  top: 45%;
  left: 48%;
  transform: translate(-50%, -50%);
  color: ${ColorMap.WHITE100};
  width: 80px;
  text-align: center;
  font-size: 12px;
  letter-spacing: 0.2em;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
