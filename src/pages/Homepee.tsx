import { Spacing } from '@/components';
import { FanComment } from '@/components/Homepee/FanComment';
import { ProfileDetail } from '@/components/Homepee/ProfileDetail';
import { useGetHomeDataQuery } from '@/hooks';
import styled from '@emotion/styled';
import React from 'react';
import { useParams } from 'react-router-dom';
import { HomepeeLayout } from '../layout/HomepeeLayout';

export const HomepeePage = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetHomeDataQuery(Number(id));

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
            <FanComment fanComments={data.fanComments}></FanComment>
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
