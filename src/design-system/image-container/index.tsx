import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';


import { ImageType, SquaredSize, BannerSize, sizeMapping } from './types';
import { colors } from '../color';
import { StrokePalette, BackgroundPalette } from '../color/types';

interface ImageContainerProps {
  src: string;
  alt: string;
  type: ImageType;
  size: SquaredSize | BannerSize;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ src, alt, type, size }) => {
  const width = type === ImageType.SQUARED ? sizeMapping[size] : 360;
  const height = sizeMapping[size];

  return (
    <Container type={type} width={width}>
      <Image src={src} alt={alt} width={width} height={height} unoptimized />
    </Container>
  );
};

export default ImageContainer;

const Container = styled.div<{ type: ImageType; width: number }>`
  width: ${({ width }) => width}px;
  ${({ type }) =>
    type === ImageType.SQUARED &&
    `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 4px;
    border: 1px solid ${colors.stroke[StrokePalette.DARK_3]};
    background-color: ${colors.background[BackgroundPalette.LIGHT_1]};
  `}
`;
