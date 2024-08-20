import React from 'react';
import styled from 'styled-components';


import useFontSize from './size';
import { FontType } from './types';
import { colors } from '../color';
import { TextPalette, PaletteType } from '../color/types';

type TextType = keyof Pick<
  JSX.IntrinsicElements,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label' | 'li'
>;

export enum FontFamily {
  POPPINS = 'Poppins',
  INTER = 'Inter',
  RECOLETA = 'Recoleta',
  NotoSansDevanagari = 'Noto Sans Devanagari',
}

type TextProps = {
  font?: FontType;
  color?: TextPalette | PaletteType;
  family?: FontFamily;
  weight?: number;
  className?: string;
  id?: string;
  required?: boolean;
  type?: TextType;
  onClick?: (e?: any) => void;
  style?: React.CSSProperties;
  labelFor?: string;
  children?: React.ReactElement | React.ReactNode;
};

const Text: React.FC<TextProps> = ({
  color,
  font = FontType.BODY_L,
  family = FontFamily.POPPINS,
  required = false,
  type = 'div',
  children,
  id,
  className,
  onClick,
  style,
  labelFor,
  weight,
}) => {
  const fontValue = useFontSize(font);
  const TextComponent = (() => {
    const fontString = fontValue.split('_');
    const fontType = fontString[0];
    const fontSize = +fontString[1];
    const lineHeight = +fontString[2];
    const textColor = Object.keys(TextPalette).includes(color as TextPalette) ? colors.text[color as TextPalette] : colors.palette[color as PaletteType];
    const fontFamily = family

    let fontWeight;
    if (weight !== undefined) fontWeight = weight;
    else {
      switch (fontType) {
        case 'L':
          fontWeight = 400;
          break;
        case 'B':
          fontWeight = 600;
          break;
        default:
          fontWeight = 400;
      }
    }

    return styled(`${type}`).attrs({ className: className, id: id })`
      font-family: ${fontFamily};
      font-size: ${fontSize}rem;
      font-weight: ${fontWeight};
      line-height: ${lineHeight}rem;
      color: ${textColor};
    `;
  })();

  return (
    // @ts-ignore
    <TextComponent onClick={onClick} style={style} htmlFor={labelFor}>
      {children}
      {required ? ' *' : ''}
    </TextComponent>
  );
};

export default React.memo(Text);
