import styled from 'styled-components';

import Icon from '../icon';
import Text from '../text'
import { TextPalette } from '../color/types';
import { FontType } from '../text/types';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  onPress?: () => void;
  icon?: string;
}

const Section = ({ title, children, onPress, icon }: SectionProps) => {
  return (
    <Container>
      <Heading onClick={onPress}>
        <Text font={FontType.H4_B} color={TextPalette.DARK_1}>
          {title}
        </Text>
        {icon && <Icon name={icon} size='s' />}
      </Heading>
      {children}
    </Container>
  );
};

export default Section;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
`;
