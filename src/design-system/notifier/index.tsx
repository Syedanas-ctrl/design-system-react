import React from 'react';
import styled from 'styled-components';
import { colors } from '../color';
import { TextPalette } from '../color/types';
import Icon from '../icon';
import { FontType } from '../text/types';
import Text from '../text';


interface NotifierProps {
  type: 'default' | 'info' | 'caution' | 'warning' | 'success';
  text: string;
}

const Notifier = ({ type, text }: NotifierProps) => {
  return (
    <Container type={type}>
      <Icon name='info' size='s' />
      <Text font={FontType.SMALL_L} color={TextPalette.DARK_1}>
        {text}
      </Text>
    </Container>
  );
};

export default Notifier;

const Container = styled.div<{ type: NotifierProps['type'] }>`
  display: flex;
  align-items: start;
  text-align: left;
  gap: 8px;
  padding: 12px 8px;
  border-radius: 4px;
  background-color: ${({ type }) => {
    switch (type) {
      case 'default':
        return colors.palette.PRIMARY_100;
      case 'info':
        return colors.palette.SECONDARY_100;
      case 'caution':
        return colors.palette.CAUTION_100;
      case 'warning':
        return colors.palette.WARNING_100;
      case 'success':
        return colors.palette.SUCCESS_100;
    }
  }};
`;
