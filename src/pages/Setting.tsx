import { HomepeeLayout } from '../layout/HomepeeLayout';
import React, { useEffect } from 'react';
import { Divider, Spacing } from '@/components';
import styled from '@emotion/styled';
import { SettingUserInfoContent } from '@/components/Setting/SettingsUserInfoContent';
import { SettingTabInfoContent } from '@/components/Setting/SettingTabInfoContent';
import { useGetSettingsQuery } from '@/hooks';
import { useHistory, useParams } from 'react-router-dom';
import { useIsHomepeeHost } from '@/hooks/useIsHomepeeHost';

export const Setting = () => {
  const history = useHistory();
  const { id: nowHomepeeId } = useParams<{ id: string }>();

  const isHomepeeHost = useIsHomepeeHost();
  const { data } = useGetSettingsQuery(nowHomepeeId);

  useEffect(() => {
    if (!isHomepeeHost) {
      history.push('/');
    }
  }, [isHomepeeHost]);

  return (
    <HomepeeLayout>
      <SettingsContainer>
        {data && (
          <>
            <SettingUserInfoContent homepeeId={nowHomepeeId} profile={data.profile} homepee={data.homepee} />
            <Spacing vertical={32} />
            <Divider type="row" width={1} color="grey" />
            <Spacing vertical={32} />
            <SettingTabInfoContent homepeeId={nowHomepeeId} tabs={data.tabs} />
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
