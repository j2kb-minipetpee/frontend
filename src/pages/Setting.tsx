import { HomepeeLayout } from '../layout/HomepeeLayout';
import React from 'react';
import { Divider, Spacing } from '@/components';
import styled from '@emotion/styled';
import { SettingTopContent } from '@/components/Setting/SettingsTopContent';
import { SettingBottomContent } from '@/components/Setting/SettingBottomContent';
import { useGetSettingsQuery } from '@/hooks';
import { useParams } from 'react-router-dom';

export const Setting = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetSettingsQuery(id);

  return (
    <HomepeeLayout>
      <SettingsContainer>
        {data && (
          <>
            <SettingTopContent profile={data.profile} />
            <Spacing vertical={32} />
            <Divider type="row" width={1} color="grey" />
            <Spacing vertical={32} />
            <SettingBottomContent homepeeId={id} tabs={data.tabs} />
          </>
        )}
      </SettingsContainer>
    </HomepeeLayout>
  );
};

const SettingsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1280px;
  padding: 20px 98px 22px 155px;
`;
