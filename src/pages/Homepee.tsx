import { Spacing } from '@/components';
import { FanComment } from '@/components/Homepee/FanComment';
import { ProfileDetail } from '@/components/Homepee/ProfileDetail';
import {
  useAddFanCommentsMutation,
  useAuth,
  useDeleteFanCommentsMutation,
  useGetFanCommentsQuery,
  useGetHomeDataQuery,
  useStarMutation,
  useUnStarMutation,
} from '@/hooks';
import { QueryKey } from '@/lib/constants';
import styled from '@emotion/styled';
import React from 'react';
import { useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import { HomepeeLayout } from '../layout/HomepeeLayout';

export const HomepeePage = () => {
  const { id } = useParams<{ id: string }>();
  const { id: memberId } = useAuth();
  const { data } = useGetHomeDataQuery(Number(id));
  const getFanCommentsQuery = useGetFanCommentsQuery(Number(id));

  const queryClient = useQueryClient();

  const addFanCommentsMutation = useAddFanCommentsMutation();
  const deleteFanCommentsMutation = useDeleteFanCommentsMutation();

  const startMuation = useStarMutation();
  const unStarMutation = useUnStarMutation();

  const handleAddFanComment = (content: string) => {
    addFanCommentsMutation.mutate(
      {
        content,
        homepeeId: Number(id),
        memberId,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries([QueryKey.GetHomeData, Number(id)]);
        },
      },
    );
  };

  const handleDeleteFanComment = () => {
    deleteFanCommentsMutation.mutate(
      {
        id: memberId,
        homepeeId: Number(id),
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries([QueryKey.GetHomeData, Number(id)]);
        },
      },
    );
  };

  const handleStar = () => {
    startMuation.mutate(
      {
        starId: Number(id),
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries([QueryKey.GetHomeData, Number(id)]);
        },
      },
    );
  };

  const handleUnStar = () => {
    unStarMutation.mutate(
      {
        starId: Number(id),
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries([QueryKey.GetHomeData, Number(id)]);
        },
      },
    );
  };

  const onMoreClick = () => {
    getFanCommentsQuery.fetchNextPage();
  };

  return (
    <HomepeeLayout>
      <ContentContainer>
        {data?.gateImageUrl && (
          <>
            <GateImageWrapper>
              <img src={data.gateImageUrl} />
            </GateImageWrapper>
            <Spacing vertical={48} />
          </>
        )}

        {data && (
          <ContentWrapper>
            <ProfileDetail
              {...data.profile}
              memberId={id}
              visitCount={data.visitCount}
              relationship={data.relationship}
              onStar={handleStar}
              onUnStar={handleUnStar}
            />
            <Spacing horizon={50} />

            <FanComment
              memberId={memberId}
              fanComments={getFanCommentsQuery.data.pages?.flatMap((data) => data.content)}
              isFan={data.relationship === 'STAR'}
              isLoading={getFanCommentsQuery.isLoading}
              isMore={getFanCommentsQuery.hasNextPage}
              onMoreClick={onMoreClick}
              onAddFanComment={handleAddFanComment}
              onDeleteFanComment={handleDeleteFanComment}
            />
          </ContentWrapper>
        )}
      </ContentContainer>
    </HomepeeLayout>
  );
};

const ContentContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 22px;
`;

const GateImageWrapper = styled.div`
  width: 978px;
  height: 149px;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
