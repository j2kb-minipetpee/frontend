import { useEditTabsMutation } from '@/hooks';
import { QueryKey } from '@/lib/constants';
import { ColorMap } from '@/lib/constants/color';
import { GalleryType, Tab } from '@/lib/model';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { QueryClient, useQueryClient } from 'react-query';
import { ButtonGroup, Divider, Spacing } from '../common';
import { ButtonGroupWrapper, SettingsTitle } from './styles';

interface SettingBottomContentProps {
  homepeeId: string;
  tabs: Tab[];
}

interface TabsChecekd {
  [key: number]: null | Tab;
}

export const SettingBottomContent = ({ homepeeId, tabs }: SettingBottomContentProps) => {
  const queryClient = useQueryClient();
  const [tabsChecked, setTabsChecked] = useState<TabsChecekd>({
    [GalleryType.BOARD]: null,
    [GalleryType.ALBUM]: null,
    [GalleryType.GUEST]: null,
  });

  const { mutate } = useEditTabsMutation();

  const onChange = (key: GalleryType) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setTabsChecked({
      ...tabsChecked,
      [key]: {
        ...tabsChecked[key],
        visible: e.target.checked,
      },
    });
  };

  const onCancel = () => {
    setTabsChecked(() => {
      return tabs.reduce((acc, cur) => {
        acc[cur.type] = {
          ...cur,
        };
        return acc;
      }, tabsChecked);
    });
  };

  const onSuccess = () => {
    mutate(
      { homepeeId, tabs: Object.values(tabsChecked) },
      {
        onSuccess: () => {
          queryClient.refetchQueries([QueryKey.GetSettingData, homepeeId]);
        },
      },
    );
  };

  useEffect(() => {
    if (!tabs) {
      return;
    }

    setTabsChecked(() => {
      return tabs.reduce((acc, cur) => {
        acc[cur.type] = {
          ...cur,
        };
        return acc;
      }, tabsChecked);
    });
  }, [tabs]);

  return (
    <SettingsBottomWrapper>
      <SettingsTitle>
        <div>탭 공개 여부</div>
        <Spacing vertical={8} />
        <Divider type="row" color="black" width={2}></Divider>
      </SettingsTitle>

      <SettingsBottomContent>
        <TabTable>
          <TableHeader>
            <div>탭 이름</div>
            <div>공개</div>
          </TableHeader>
          <TableRow>
            <label htmlFor="board">게시판</label>
            <input id="board" type="checkbox" checked={tabsChecked[GalleryType.BOARD].visible} onChange={onChange(GalleryType.BOARD)} />
          </TableRow>
          <TableRow>
            <label htmlFor="gallery">갤러리</label>
            <input id="gallery" type="checkbox" checked={tabsChecked[GalleryType.ALBUM].visible} onChange={onChange(GalleryType.ALBUM)} />
          </TableRow>
          <TableRow>
            <label htmlFor="guest">방명록</label>
            <input id="guest" type="checkbox" checked={tabsChecked[GalleryType.GUEST].visible} onChange={onChange(GalleryType.GUEST)} />
          </TableRow>
        </TabTable>

        <ButtonGroupWrapper>
          <ButtonGroup
            buttons={[
              { text: '취소', color: 'GREY70', onClick: onCancel },
              { text: '완료', color: 'EMERALD100', onClick: onSuccess },
            ]}
            size="large"
          ></ButtonGroup>
        </ButtonGroupWrapper>
      </SettingsBottomContent>
    </SettingsBottomWrapper>
  );
};

const SettingsBottomWrapper = styled.section`
  width: 100%;
  display: flex;
  padding: 0 98px 22px 155px;
`;

const SettingsBottomContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 634px;
  margin-left: 91px;
`;

const TabTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
`;

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 273px;
  height: 51px;
  padding: 29px 32px;
  margin-bottom: 12px;
`;

const TableHeader = styled(TableRow)`
  background: ${ColorMap.GREY70};
`;
