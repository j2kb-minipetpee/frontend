import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Footer, Logo, Tab } from '@/components';
import { useAuth, useGetHomeDataQuery } from '@/hooks';
import logo from '@/assets/images/logo.png';
import { HomepeeTitle } from '@/components/Homepee/HomepeeTitle';
import { ColorMap } from '@/lib/constants/color';
import { useHistory, useParams } from 'react-router-dom';
import { UserName } from '@/components/common/UserName';

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
  const { id: homepeeId } = useParams<{ id: string }>();
  const { data } = useGetHomeDataQuery(Number(homepeeId));
  const history = useHistory();

  const [selectedTab, setSelectedTab] = useState('home');
  const onChange = (index: string) => {
    setSelectedTab(index);
  };

  const onLogoClick = () => {
    history.push('/');
  };

  return (
    <HomepeeLayoutContainer>
      <HomepeeWrapper>
        <HomepeeHeader>
          <HomepeeHeaderTop>
            <Logo width={128} height={80} onClick={onLogoClick} />

            {id ? <UserName name={name} /> : <div>로그인</div>}
          </HomepeeHeaderTop>

          <HomepeeHeaderBottom>
            {data && <HomepeeTitle title={data.title} />}

            <Tab tabs={tabs} selectedTabIndex={selectedTab} onChange={onChange} />
          </HomepeeHeaderBottom>
        </HomepeeHeader>
        <HomepeeContentContainer>{children}</HomepeeContentContainer>
      </HomepeeWrapper>
    </HomepeeLayoutContainer>
  );
};

const HomepeeLayoutContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: ${ColorMap.WHITE80};
`;

const HomepeeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 1280px;
  height: 100%;
`;
const HomepeeHeader = styled.header``;

const HomepeeHeaderTop = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem 0;
`;

const HomepeeContentContainer = styled.section`
  border: 1px solid ${ColorMap.GREY100};
  height: 100%;
`;

const HomepeeHeaderBottom = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  margin-left: auto;
  padding: 0 2rem;
`;
