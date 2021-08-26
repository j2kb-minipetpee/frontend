import { Spacing } from '@/components';
import { FanComment } from '@/components/Homepee/FanComment';
import { ProfileDetail } from '@/components/Homepee/ProfileDetail';
import { useGetHomeDataQuery } from '@/hooks';
import styled from '@emotion/styled';
import React from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { HomepeeLayout } from '../layout/HomepeeLayout';

export const HomepeePage = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetHomeDataQuery(Number(id));

  return (
    <HomepeeLayout>
      <ContentContainer>
        {data?.gateImageUrl && (
          <div>
            <img src={data.gateImageUrl} />
          </div>
        )}
        {data && (
          <>
            <ProfileDetail {...data.profile} visitCount={data.visitCount} />
            <Spacing horizon={50} />
            <FanComment fanComments={data.fanComments}></FanComment>
          </>
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
  justify-content: space-between;
`;
