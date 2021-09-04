import { MainLayout } from '../layout/MainLayout';

import React, { useMemo } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Post } from '@/components/Main/Post';
import styled from '@emotion/styled';
import { useGetPopularPostsQuery, useSearchMembersQuery, useSearchPostsQuery } from '@/hooks';
import { getQueryString } from '@/lib/utils/getQueryString';
import { Member } from '@/components/Main/Member';
import { SearchType } from '@/lib/model';
import { MainText } from '@/components/Main/MainText';
import nextImage from '@/assets/images/next_large.png';
import { Spacing } from '@/components';

export const Main = () => {
  const history = useHistory();
  const location = useLocation();
  const queryString = getQueryString(location.search);

  const type = (queryString.get('type') || 'popular') as SearchType;

  const popularPostQuery = useGetPopularPostsQuery(type === 'popular');
  const searchPostQuery = useSearchPostsQuery(queryString.get('title'), type === 'post');
  const searchMemberQuery = useSearchMembersQuery(queryString.get('name'), type === 'user');

  const isMore = useMemo(() => {
    if (type === 'popular') {
      return popularPostQuery.hasNextPage;
    }

    if (type === 'post') {
      return searchPostQuery.hasNextPage;
    }

    return searchMemberQuery.hasNextPage;
  }, [type, popularPostQuery.hasNextPage, searchPostQuery.hasNextPage, searchMemberQuery.hasNextPage]);

  const onMoreClick = () => {
    if (type === 'popular') {
      popularPostQuery.fetchNextPage();
    }

    if (type === 'post') {
      searchPostQuery.fetchNextPage();
    }

    searchMemberQuery.fetchNextPage();
  };

  return (
    <MainLayout>
      <MainText type={type} />
      <PostContainer>
        {type === 'popular' &&
          popularPostQuery.data?.pages?.length > 0 &&
          popularPostQuery.data.pages
            .flatMap((data) => data.content)
            .map(({ post, homepeeId, member }) => (
              <Post
                key={post.id}
                name={member.name}
                profileImage={member.profileImageUrl}
                coverImage={post.imageUrl}
                title={post.title}
                description={post.content}
                onClick={() => history.push(`/homepee/${homepeeId}`)}
              ></Post>
            ))}

        {type === 'post' &&
          searchPostQuery.data?.pages?.length > 0 &&
          searchPostQuery.data.pages
            .flatMap((data) => data.content)
            .map(({ post, homepeeId, member }) => (
              <Post
                key={post.id}
                name={member.name}
                profileImage={member.profileImageUrl}
                coverImage={post.imageUrl}
                title={post.title}
                description={post.content}
                onClick={() => history.push(`/homepee/${homepeeId}`)}
              ></Post>
            ))}

        {type === 'user' &&
          searchMemberQuery.data?.pages?.length > 0 &&
          searchMemberQuery.data.pages
            .flatMap((data) => data.content)
            .map(({ homepeeId, id, name, profileImageUrl }) => <Member key={id} homepeeId={homepeeId} name={name} id={id} profileImageUrl={profileImageUrl} />)}
      </PostContainer>

      {isMore && (
        <NextButtonWrapper onClick={onMoreClick}>
          <span>더보기</span>
          <Spacing horizon={4} /> <img src={nextImage} />
        </NextButtonWrapper>
      )}
    </MainLayout>
  );
};

const PostContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow-y: auto;
  padding: 50px 449px;
`;

const NextButtonWrapper = styled.button`
  border: none;
  background-color: white;
  outline: none;
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-left: auto;
  margin-right: 449px;
`;
