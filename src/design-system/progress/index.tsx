'use client';
import React from 'react';
import styled from 'styled-components';
import { colors } from '../color';
import { TextPalette, PaletteType, FillPalette, StrokePalette } from '../color/types';
import { FontType } from '../text/types';
import Text from '../text';

export interface ProgressStep {
  label: string;
  onClick: () => void;
  isActive: boolean;
}

interface ProgressProps {
  type: 'icon' | 'number';
  steps: ProgressStep[];
}

const Progress = ({ type, steps }: ProgressProps) => {
  const indexOfActiveStep = steps.findIndex((step) => step.isActive);
  return (
    <Container>
      {steps.map((step, index) => (
        <>
          <Step onClick={step.onClick} key={step.label} toHighlight={index <= indexOfActiveStep}>
            <TextWrapper>
              <Text
                font={FontType.SMALL_B}
                color={index <= indexOfActiveStep ? TextPalette.LIGHT_1 : TextPalette.DARK_2}>
                <NumberContainer>{index + 1}</NumberContainer>
                {index === indexOfActiveStep ? step.label : ''}
                {index === indexOfActiveStep && <>&nbsp;&nbsp;&nbsp;</>}
              </Text>
            </TextWrapper>
          </Step>
          {index < steps.length - 1 && <Divider toHighlight={index <= indexOfActiveStep - 1} />}
        </>
      ))}
    </Container>
  );
};

export default Progress;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Step = styled.button<{ toHighlight: boolean }>`
  background-color: ${({ toHighlight }) =>
    toHighlight ? colors.palette[PaletteType.PRIMARY_700] : colors.fill[FillPalette.DARK_3]};
  border-radius: 8px;
  white-space: nowrap;
  cursor: pointer;
  flex-shrink: 0;
  padding: 0;
  border: none;
`;

const NumberContainer = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Divider = styled.div<{ toHighlight: boolean }>`
  flex-grow: 1;
  height: 1px;
  background-color: ${({ toHighlight }) =>
    toHighlight ? colors.palette[PaletteType.PRIMARY_700] : colors.stroke[StrokePalette.DARK_3]};
  margin: 0 0px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  align-items: center;
  justify-content: space-between;
  padding: 24px 16px;
  width: 100%;
`;
