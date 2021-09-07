import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Divider, Footer, Select } from '@/components';
import logo from '@/assets/images/logo.png';
import { useAuth } from '@/hooks';
import { ColorMap } from '@/lib/constants/color';
import { Link, useHistory } from 'react-router-dom';
import { routes } from '@/lib/constants/routes';
import search from '@/assets/images/search.png';
import { useDispatch } from 'react-redux';
import { logout } from '@/store/auth';

const options = [
  {
    index: 'popular',
    text: '인기 게시글',
  },
  {
    index: 'post',
    text: '게시글',
  },
  {
    index: 'user',
    text: '계정',
  },
];

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { id, homepeeId, name } = useAuth();

  const [selectedIndex, setSelectedIndex] = useState('popular');
  const [searchText, setSearchText] = useState('');

  const moveMyHome = () => {
    history.push(routes.HOMEPEE.replace(':id', String(homepeeId)));
  };

  const onSelectedChange = (value: string) => {
    setSelectedIndex(value);
    setSearchText('');
  };

  const onLogout = () => {
    localStorage.removeItem('accessToken');
    dispatch(logout());
  };

  const onSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onSearchClick = () => {
    if (selectedIndex === 'user') {
      history.push(`?type=${selectedIndex}${searchText && `&name=${searchText}`}`);
      return;
    }

    history.push(`?type=${selectedIndex}${searchText && `&title=${searchText}`}`);
  };

  return (
    <MainLayoutContainer>
      <MainHeaderContainer>
        <MainHeader>
          <img src={logo} width={196} />
          <div className="auth_box">
            {id ? (
              <>
                <UserInfoWrapper onClick={moveMyHome}>{name} 님</UserInfoWrapper>
                <UserInfoWrapper onClick={onLogout}>로그아웃 </UserInfoWrapper>
              </>
            ) : (
              <>
                <Link to={routes.SIGNIN}>
                  <UserInfoWrapper>로그인</UserInfoWrapper>
                </Link>
                <Link to={routes.SIGNUP}>
                  <UserInfoWrapper>회원가입</UserInfoWrapper>
                </Link>
              </>
            )}
          </div>
        </MainHeader>

        <MainSearchWrapper>
          <Select options={options} selectedIndex={selectedIndex} onChange={onSelectedChange} />

          <Divider type="column" />
          <input
            placeholder={selectedIndex === 'popular' ? '인기 게시글은 검색이 안 돼요.' : '검색어를 입력해주세요.'}
            value={searchText}
            onChange={onSearchTextChange}
            disabled={selectedIndex === 'popular'}
          />

          <SearchWrapper onClick={onSearchClick}>
            <img src={search} alt="search-icon" />
          </SearchWrapper>
        </MainSearchWrapper>
      </MainHeaderContainer>
      <MainSection>{children}</MainSection>

      <Footer />
    </MainLayoutContainer>
  );
};

const MainLayoutContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MainHeaderContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 353px;
  background: ${ColorMap.EMERALD100};
  color: ${ColorMap.WHITE100};
`;

const MainHeader = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;

  & img {
    margin-left: 291px;
  }

  & .auth_box {
    display: flex;
    margin-top: 38px;
    margin-right: 367px;
    & div {
      margin-right: 0.5rem;
    }
  }
`;

const UserInfoWrapper = styled.div`
  color: ${ColorMap.WHITE100};
  white-space: nowrap;
  cursor: pointer;
`;

const MainSection = styled.section`
  padding-bottom: 80px;
`;

const MainSearchWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 508px;
  height: 48px;
  border-radius: 25px;
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  font-size: 16px;
  background: ${ColorMap.WHITE100};
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

const SearchWrapper = styled.div`
  margin-top: -2px;
  cursor: pointer;
`;
