import { Spacing } from '@/components';
import { FanComment } from '@/components/Homepee/FanComment';
import { ProfileDetail } from '@/components/Homepee/ProfileDetail';
import { useAddFanCommentsMutation, useAuth, useDeleteFanCommentsMutation, useGetFanCommentsQuery, useGetHomeDataQuery } from '@/hooks';
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
            <ProfileDetail {...data.profile} visitCount={data.visitCount} />
            <Spacing horizon={50} />

            <FanComment
              memberId={memberId}
              fanComments={getFanCommentsQuery.data.pages?.flatMap((data) => data.fanComments)}
              isFan={data.relationship === 'STAR'}
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
  padding: 80px 120px 0 198px;
  display: flex;
  flex-direction: column;
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
