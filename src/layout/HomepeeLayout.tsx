import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Divider, Footer, Select } from '../components';
import { useAuth } from '../hooks';
import { ColorMap } from '../lib/constants';

const options = [
  {
    index: 'popular',
    text: '인기 게시글',
  },
  {
    index: 'user',
    text: '계정',
  },
];

interface HommeLayoutProps {
  children: React.ReactNode;
}

export const HomepeeLayout = ({ children }: HommeLayoutProps) => {
  const { id, name } = useAuth();
  const [selectedIndex, setSelectedIndex] = useState('popular');

  const onChange = (value: string) => {
    setSelectedIndex(value);
  };

  return (
    <HomepeeLayoutContainer>
      <HomepeeHeaderContainer>
        <HomepeeHeader>
          <div>로고</div>
          <div className="auth_box">
            {id ? (
              <>
                <div>{name} 님</div>
                <div>로그아웃 </div>
              </>
            ) : (
              <>
                <div>로그인</div>
                <div>회원가입</div>
              </>
            )}
          </div>
        </HomepeeHeader>

        <HomepeeSearchWrapper>
          <Select options={options} selectedIndex={selectedIndex} onChange={onChange} />

          <Divider type="column" />
          <input placeholder="검색해주세요~" />
        </HomepeeSearchWrapper>
      </HomepeeHeaderContainer>
      <section>{children}</section>

      <Footer />
    </HomepeeLayoutContainer>
  );
};

const HomepeeLayoutContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const HomepeeHeaderContainer = styled.section`
  position: relative;
  width: 100%;
  height: 40%;
  background: ${ColorMap.EMERALD};
  color: ${ColorMap.WHITE};
`;

const HomepeeHeader = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;

  & .auth_box {
    display: flex;
    & div {
      margin-right: 0.5rem;
    }
  }
`;

const HomepeeSearchWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 508px;
  height: 48px;
  border-radius: 12px;
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  font-size: 16px;
  background: ${ColorMap.WHITE};
  display: flex;

  & select {
  }

  & input {
    width: 400px;
    padding: 0 1rem;
    border: none;
    outline: none;
    font-size: 16px;
  }
`;
