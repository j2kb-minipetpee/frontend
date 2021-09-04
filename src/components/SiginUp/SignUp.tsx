import { ColorMap } from '@/lib/constants/color';
import styled from '@emotion/styled';
import React from 'react';

import { Logo, Spacing } from '@/components/common';
import { useInput } from '@/hooks';
import { useHistory } from 'react-router-dom';
import { useSignUpMutation } from '@/hooks/query/auth';

export const SignUp = () => {
  const history = useHistory();

  const signUpMutation = useSignUpMutation();

  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [name, onChangeName] = useInput('');

  const onClickSignUp = () => {
    signUpMutation.mutate(
      {
        email,
        password,
        name,
      },
      {
        onSuccess: () => {
          history.push('/login');
        },
      },
    );
  };

  return (
    <SignUpContainer>
      <LogoConatiner>
        <Logo height={100} />
      </LogoConatiner>

      <Spacing vertical={113} />
      <Title>JOIN US</Title>
      <Spacing vertical={114} />

      <Form>
        <label htmlFor="email">이메일</label>
        <Spacing vertical={30} />
        <Input id="email" type="email" value={email} onChange={onChangeEmail} />
        <Spacing vertical={41} />

        <label htmlFor="name">이름</label>
        <Spacing vertical={30} />
        <Input id="name" type="text" value={name} onChange={onChangeName} />
        <Spacing vertical={41} />

        <label htmlFor="password">비밀번호</label>
        <Spacing vertical={30} />
        <Input id="password" type="password" value={password} onChange={onChangePassword} />
        <Spacing vertical={57} />

        <Button onClick={onClickSignUp}>회원가입하기</Button>
      </Form>
    </SignUpContainer>
  );
};

const SignUpContainer = styled.section`
  display: flex;
  height: 100%;
  flex-direction: column;
  margin-top: 56px;
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
  padding: 0 1rem;

  outline: none;
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
