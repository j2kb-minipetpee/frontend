import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Logo, Tab } from '@/components';
import { useAuth, useGetHomeDataQuery } from '@/hooks';
import { HomepeeTitle } from '@/components/Homepee/HomepeeTitle';
import { ColorMap } from '@/lib/constants/color';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { UserName } from '@/components/common/UserName';
import { routes } from '@/lib/constants/routes';
import { useMountedEffect } from '@/hooks/useMountedEffect';
import { convertPathname } from '@/lib/utils/convertPathname';
import { SelectedTab } from '@/lib/constants';

const tabs = [
  {
    index: 'HOMEPEE',
    text: '홈',
  },
  {
    index: 'BOARD',
    text: '게시판',
  },
  {
    index: 'GALLERY',
    text: '갤러리',
  },
  {
    index: 'GUESTBOOK',
    text: '방명록',
  },
  {
    index: 'SETTINGS',
    text: '관리',
  },
];

interface HomepeeLayoutProps {
  children: React.ReactNode;
}

export const HomepeeLayout = ({ children }: HomepeeLayoutProps) => {
  const { id: homepeeId } = useParams<{ id: string }>();
  const history = useHistory();
  const { pathname } = useLocation();

  const { id, name } = useAuth();
  const { data } = useGetHomeDataQuery(Number(homepeeId));
  const [selectedTab, setSelectedTab] = useState<SelectedTab>(convertPathname(pathname));

  const onChange = (index: SelectedTab) => {
    setSelectedTab(index);
  };

  const onLogoClick = () => {
    history.push('/');
  };

  useMountedEffect(() => {
    const pathname = routes[selectedTab].replace(':id', homepeeId);
    history.push(pathname);
  }, [selectedTab]);

  return (
    <HomepeeLayoutContainer>
      <HomepeeWrapper>
        <HomepeeHeader>
          <HomepeeHeaderTop>
            <Logo width={128} height={80} onClick={onLogoClick} />

            {id ? <UserName name={name} /> : <Link to={routes.SIGNIN}>로그인</Link>}
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
