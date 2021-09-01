import { useGetBoardPostQuery } from '@/hooks';
import { DetailedPostLayout } from '@/layout/DetailedPostLayout';
import { HomepeeLayout } from '@/layout/HomepeeLayout';
import React from 'react';
import { useParams } from 'react-router-dom';

interface paramsType {
  id: string;
  postId: string;
}

export const DetailedBoardPost = () => {
  const params = useParams<paramsType>();
  const { id: homepeeId, postId } = params;

  const { isLoading, data } = useGetBoardPostQuery({ homepeeId, postId });

  return (
    <HomepeeLayout>
      {!isLoading && (
        <DetailedPostLayout
          userId={Number(homepeeId)}
          title={data.title}
          content={data.content}
          imageUrl={data.image.url}
          createdAt={data.createdAt}
          viewCount={1}
        ></DetailedPostLayout>
      )}
    </HomepeeLayout>
  );
};
