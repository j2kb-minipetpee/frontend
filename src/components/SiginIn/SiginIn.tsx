import React from 'react';

import styled from '@emotion/styled';
import { ColorMap } from '@/lib/constants/color';
import { AuthRepository } from '@/lib/repository';
import { setAuthToken } from '@/lib/client';

import { Spacing, Logo } from '@/components/common';
import { useInput } from '@/hooks';
import { login } from '@/store/auth';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import { routes } from '@/lib/constants/routes';

export const SiginIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const onLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { accessToken } = await AuthRepository.login({ email, password });
    setAuthToken(accessToken);
    localStorage.setItem('accessToken', accessToken);

    const { email: userEmail, homepeeId, id, name } = jwtDecode<{ id: number; homepeeId: number; name: string; email: string }>(accessToken);

    dispatch(login({ email: userEmail, name, id, homepeeId }));
    history.push(routes.HOME);
  };

  return (
    <SiginInContainer>
      <LogoConatiner>
        <Logo height={100} />
      </LogoConatiner>

      <Spacing vertical={30} />
      <Title>JOIN US</Title>
      <Spacing vertical={30} />

      <Form onSubmit={onLoginSubmit}>
        <Input id="email" type="email" placeholder="이메일" value={email} onChange={onEmailChange} />
        <Spacing vertical={11} />

        <Input id="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordChange} />
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
