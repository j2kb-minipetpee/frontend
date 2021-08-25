import { ColorMap } from '@/lib/constants/color';
import styled from '@emotion/styled';
import React from 'react';
import { Spacing } from '../common';
import { Logo } from '../common/Logo';

export const SiginIn = () => {
  return (
    <SiginInContainer>
      <LogoConatiner>
        <Logo height={100} />
      </LogoConatiner>

      <Spacing vertical={30} />
      <Title>JOIN US</Title>
      <Spacing vertical={30} />

      <Form>
        <Input id="email" type="email" placeholder="이메일" />
        <Spacing vertical={11} />

        <Input id="password" type="password" placeholder="비밀번호" />
        <Spacing vertical={39} />

        <Button>로그인</Button>
      </Form>
    </SiginInContainer>
  );
};

const SiginInContainer = styled.section`
  display: flex;
  height: 100%;
  flex-direction: column;
  margin-top: 304px;
`;

const LogoConatiner = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  text-align: center;
  color: ${ColorMap.EMERALD100};
  letter-spacing: 6px;
  font-weight: 900;
  font-size: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  background-color: ${ColorMap.EMERALD50};
  width: 406px;
  height: 35px;
  border: none;
  color: ${ColorMap.EMERALD100};
  padding: 0 16px;
  outline: none;

  &::placeholder {
    color: #9dd6bc;
    font-size: 17px;
    letter-spacing: 0.075em;
  }
`;

const Button = styled.button`
  width: 406px;
  height: 35px;
  border: none;
  background-color: ${ColorMap.EMERALD100};
  color: ${ColorMap.WHITE100};
  font-weight: 600;
  letter-spacing: 2px;

  cursor: pointer;
`;
