import styled from '@emotion/styled';
import React from 'react';
import { ColorMap } from '@/lib/constants/color';
import { Link } from 'react-router-dom';
import { routes } from '@/lib/constants/routes';

interface TabItem {
  index: string;
  text: string;
}

export interface TabProps {
  selectedTabIndex: string;
  tabs: TabItem[];
  onChange: (index: string) => void;
}

export const Tab = ({ selectedTabIndex, tabs, onChange }: TabProps) => {
  return (
    <TabContainer>
      {tabs.map((tab) => (
        <TabButton key={tab.index} onClick={() => onChange(tab.index)} isSelected={tab.index === selectedTabIndex}>
          {tab.text}
        </TabButton>
      ))}
    </TabContainer>
  );
};

const TabContainer = styled.div`
  display: flex;
  width: 500px;

  & button {
    margin-right: 12px;
  }
`;

const TabButton = styled.button<{ isSelected: boolean }>`
  width: 72px;
  height: 42px;
  font-size: 15px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? ColorMap.EMERALD100 : ColorMap.GREY70)};
  color: ${ColorMap.WHITE100};

  transition: opacity 0.2s ease-in;
  &:hover {
    opacity: 0.8;
  }
`;
