import React from 'react';
import { HomepeeLayout } from '../layout/HomepeeLayout';
import { Button } from '@/components';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import { useAuth, useGetGalleryPostQuery } from '@/hooks';
import { DetailedGalleryPost } from './DetailedGalleryPost';
import styled from '@emotion/styled';

export const Gallery = () => {
  const myInfo = useAuth();
  const { id: homepeeId } = useParams<{ id: string }>();
  const { url } = useRouteMatch();
  const history = useHistory();
  const getGalleryPostQuery = useGetGalleryPostQuery({ homepeeId });

  const handleClick = () => {
    history.push(`${url}/write`);
  };

  return (
    <HomepeeLayout>
      {myInfo.id === Number(homepeeId) && (
        <NewPostBtnContainer>
          <Button color="GREY100" text="새글" onClick={handleClick} />
        </NewPostBtnContainer>
      )}
      {getGalleryPostQuery.data?.pages?.length > 0 &&
        getGalleryPostQuery.data.pages
          .flatMap((data) => data.content)
          .map((post) => {
            return <DetailedGalleryPost key={post.id} title={post.title} comments={post.comments} images={post.images} id={post.id} />;
          })}
      <button onClick={() => getGalleryPostQuery.fetchNextPage()}>더보기</button>
    </HomepeeLayout>
  );
};

const NewPostBtnContainer = styled.div`
  margin: 42px 0 0 142px;
`;
