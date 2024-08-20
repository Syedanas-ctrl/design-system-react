import React from 'react';
import styled from 'styled-components';
import { colors } from '../color';
import { PaletteType } from '../color/types';

const Icon = ({
  size,
  name,
  fill = false,
  color,
  onClick,
}: {
  size: 'xs' | 's' | 'm';
  weight?: number;
  name: string;
  onClick?: () => void;
  color?: PaletteType;
  fill?: boolean;
}) => {
  return (
    //converting fill to 1 or 0 due to a boolean issue in styled-components reference - https://stackoverflow.com/questions/49784294/warning-received-false-for-a-non-boolean-attribute-how-do-i-pass-a-boolean-f
    //@ts-ignore
    <IconContainer onClick={onClick} size={size} fill={fill ? 1 : 0} color={colors?.palette?.[color as PaletteType]}>
      {name}
    </IconContainer>
  );
};

export default Icon;

const IconContainer = styled.span.attrs((props) => ({
  className: `material-symbols-rounded flex items-center justify-center`,
}))`
  cursor: pointer;
  gap: 4px;
  aspect-ratio: 1 / 1;
  color: ${({ color }) => color};
  font-variation-settings: ${({ fill }: any) => (fill ? "'FILL' 1" : "'FILL' 0")};
  ${({ size }: any) => {
    switch (size) {
      case 'xs':
        return `
          font-size: 20px;
          width: 20px;
          height: 20px;
        `;
      case 's':
        return `
          font-size: 24px;
          width: 24px;
          height: 24px;
        `;
      case 'm':
        return `
          font-size: 28px;
          width: 28px;
          height: 28px;
        `;
    }
  }}
`;
