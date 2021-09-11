import React from 'react';
import { HomepeeLayout } from '../../layout/HomepeeLayout';
import { Button, Empty } from '@/components';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import { useAuth, useGetGalleryPostQuery } from '@/hooks';
import { DetailedGalleryPost } from '@/components/Gallery/DetailedGalleryPost';
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

  const handleMoreClick = () => getGalleryPostQuery.fetchNextPage();

  return (
    <HomepeeLayout>
      <GalleryContainer>
        {myInfo.id === Number(homepeeId) && (
          <NewPostBtnContainer>
            <Button color="GREY100" text="새글" onClick={handleClick} />
          </NewPostBtnContainer>
        )}

        {!getGalleryPostQuery.data?.pages.flatMap((data) => data.content).length ? (
          <Empty />
        ) : (
          getGalleryPostQuery.data.pages
            .flatMap((data) => data.content)
            .map((post) => {
              return <DetailedGalleryPost key={post.id} title={post.title} comments={post.comments} images={post.images} id={post.id} />;
            })
        )}
        {getGalleryPostQuery.hasNextPage && (
          <MoreLoadBtnContainer>
            <Button text="더보기" onClick={handleMoreClick} />
          </MoreLoadBtnContainer>
        )}
      </GalleryContainer>
    </HomepeeLayout>
  );
};

const NewPostBtnContainer = styled.div`
  margin: 42px 0 0 142px;
`;

const MoreLoadBtnContainer = styled.div`
  width: 1000px;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;
const GalleryContainer = styled.div`
  width: 100%;
  height: 100%;
`;
