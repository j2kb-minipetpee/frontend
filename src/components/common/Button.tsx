import { Color, ColorMap } from '@/lib/constants/color';
import styled from '@emotion/styled';
import React from 'react';

export interface ButtonProps {
  color?: Color;
  text: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

export const Button = ({ color, text, onClick, ...props }: ButtonProps) => {
  return (
    <ButtonContainer color={color} onClick={onClick} {...props}>
      {text}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<Pick<ButtonProps, 'color'>>`
  background-color: ${({ color }) => (color ? ColorMap[color] : ColorMap.EMERALD100)};
  width: 63px;
  height: 30px;
  font-size: 13px;
  color: ${ColorMap.WHITE100};
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;
