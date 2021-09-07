import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useCallback, useMemo, useRef } from 'react';
import { useToggle, useClickOutside } from '@/hooks';
import { ColorMap } from '@/lib/constants/color';

interface Option {
  index: string;
  text: string;
}

export interface SelectProps {
  selectedIndex: string;
  options: Option[];
  onChange: (value: string) => void;
}

export const Select = ({ onChange, options, selectedIndex }: SelectProps) => {
  const [isShown, onToggle, , onClose] = useToggle();
  const ref = useRef<null | HTMLDivElement>(null);

  const selectedText = useMemo(() => options.filter((v) => v.index === selectedIndex)[0].text, [selectedIndex, options]);

  const onClickItem = useCallback(
    (index: string) => (e: React.MouseEvent) => {
      e.stopPropagation();
      onChange(index);
      onClose();
    },
    [onChange],
  );

  useClickOutside(ref, onClose);

  return (
    <SelectContainer onClick={onToggle} ref={ref}>
      <div>{selectedText}</div>
      {isShown && (
        <ul>
          {options.map((option) => (
            <SelectItem key={option.index} onClick={onClickItem(option.index)} isSelected={selectedIndex === option.index}>
              {option.text}
            </SelectItem>
          ))}
        </ul>
      )}
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  position: relative;
  width: 100px;
  & div {
    line-height: 32px;
    color: ${ColorMap.BLACK100};
  }
  & > ul {
    position: absolute;
    top: 40px;
    right: 0px;
    width: 108px;
    background: ${ColorMap.WHITE100};
    color: ${ColorMap.BLACK100};
  }
`;

const SelectItem = styled.li<{ isSelected: boolean }>`
  font-size: 14px;
  padding: 0.5rem;
  cursor: pointer;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: ${ColorMap.GREY100};
      color: ${ColorMap.WHITE100};
    `}
`;
