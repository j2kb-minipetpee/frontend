import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Footer, Tab } from '@/components';
import { useAuth } from '@/hooks';
import logo from '@/assets/images/logo.png';

const tabs = [
  {
    index: 'home',
    text: '홈',
  },
  {
    index: 'board',
    text: '게시판',
  },
  {
    index: 'gallery',
    text: '갤러리',
  },
  {
    index: 'guest',
    text: '방명록',
  },
  {
    index: 'settings',
    text: '관리',
  },
];

interface HomepeeLayoutProps {
  children: React.ReactNode;
}

export const HomepeeLayout = ({ children }: HomepeeLayoutProps) => {
  const { id, name } = useAuth();
  const HomepeeName = '홈피 네임'; // useQuery 를 통해서 가져온 홈피 이름

  const [selectedTab, setSelectedTab] = useState('home');
  const onChange = (index: string) => {
    setSelectedTab(index);
  };

  return (
    <HomepeeLayoutContainer>
      <HomepeeHeader>
        <HomepeeHeaderTop>
          <img src={logo} width={64}></img>

          {id ? <div>{name} 님</div> : <div>로그인</div>}
        </HomepeeHeaderTop>

        <HomepeeHeaderBottom>
          <div>{HomepeeName}</div>
          <Tab tabs={tabs} selectedTabIndex={selectedTab} onChange={onChange} />
        </HomepeeHeaderBottom>
      </HomepeeHeader>
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

const HomepeeHeader = styled.header`
  margin-bottom: auto;
`;

const HomepeeHeaderTop = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const HomepeeHeaderBottom = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding: 0 2rem;
`;
