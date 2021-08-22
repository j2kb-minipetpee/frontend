import { ColorMap } from '@/lib/constants/color';
import styled from '@emotion/styled';
import React from 'react';
import { ButtonProps } from './Button';

export interface ButtonGroupProps {
  size: 'small' | 'large';
  buttons: ButtonProps[];
}

export const ButtonGroup = ({ buttons, size }: ButtonGroupProps) => {
  return (
    <ButtonGroupContainer>
      {buttons.map(({ text, ...buttonOption }) => (
        <Button key={text} {...buttonOption} size={size}>
          {text}
        </Button>
      ))}
    </ButtonGroupContainer>
  );
};

const ButtonGroupContainer = styled.div`
  display: flex;
`;

type ButtonType = Pick<ButtonProps, 'color'> & Pick<ButtonGroupProps, 'size'>;

const Button = styled.button<ButtonType>`
  background-color: ${({ color }) => (color ? ColorMap[color] : ColorMap.EMERALD100)};
  font-size: ${({ size }) => (size === 'large' ? '13px' : '11px')};
  color: ${ColorMap.WHITE100};
  border: none;
  cursor: pointer;

  width: ${({ size }) => (size === 'large' ? '58.5px' : '47.5px')};
  height: ${({ size }) => (size === 'large' ? '30px' : '20px')};
  margin-right: 1px;

  &:first-of-type {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:last-of-type {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-right: 0;
  }
`;
