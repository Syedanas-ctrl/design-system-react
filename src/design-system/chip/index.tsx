import React from 'react';
import styled from 'styled-components';
import { colors } from '../color';
import { FillPalette, TextPalette, PaletteType } from '../color/types';
import Icon from '../icon';
import { FontType } from '../text/types';
import Text from '../text';

interface ChipProps {
  label: string;
  onDelete?: () => void;
  avatar?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}

const ChipWrapper = styled.div<{ isSelected: boolean }>`
  display: flex;
  padding: 4px 8px 4px 12px;
  align-items: center;
  gap: 6px;
  border-radius: 8px;
  background-color: ${({ isSelected }) => (isSelected ? colors.fill[FillPalette.DARK_1] : colors.fill[FillPalette.DARK_3])};
`;

// TODO: Add Avatar Later

const ChipDeleteIcon = styled.div`
  cursor: pointer;
`;

const Chip: React.FC<ChipProps> = ({ label, onDelete, avatar = false, isSelected = false, onClick }) => {
  const textColor = isSelected ? TextPalette.LIGHT_1 : TextPalette.DARK_1;
  const fontType = isSelected ? FontType.BODY_B : FontType.BODY_L;

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onDelete) {
      onDelete();
    }
  };

  const handleChipClick = () => {
      onClick?.();
  };

  return (
    <ChipWrapper isSelected={isSelected} onClick={handleChipClick}>
      {avatar && <div></div>}
      <Text font={fontType} color={textColor}>
        {label}
      </Text>
      {isSelected && (
        <ChipDeleteIcon onClick={handleDelete}>
          <Icon size='s' name='close' color={PaletteType.GREYS_100} />
        </ChipDeleteIcon>
      )}
    </ChipWrapper>
  );
};

export default Chip;
