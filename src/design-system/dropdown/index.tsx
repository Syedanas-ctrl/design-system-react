import { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { colors } from '../color';
import Icon from '../icon';

export type Option = {
  value: string | number;
  label: string;
};

interface IDropdownProps {
  options: Option[];
  selectedOptions: Option[];
  setSelectedOptions: (options: Option[]) => void;
  selectMultiple?: boolean;
  size?: 'xs' | 's' | 'm';
  classes?: string;
  closeDropdown: () => void;
}

const Dropdown: FC<IDropdownProps> = ({
  size = 's',
  closeDropdown,
  options,
  selectedOptions,
  setSelectedOptions,
  selectMultiple,
  classes,
}) => {
  const sectionRef = useRef(null);

  // Close dropdown when clicked outside
  useEffect(() => {
    function handleClickOutside(event: any) {
      // @ts-ignore
      if (sectionRef.current && !sectionRef.current.contains(event.target)) {
        closeDropdown();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sectionRef, closeDropdown]);

  return (
    <div ref={sectionRef} className={'border border-stroke-DARK_3 bg-background-LIGHT_1 rounded-lg p-1 ' + classes}>
      {options.map((option) => (
        <List
          key={option?.label}
          // @ts-ignore
          size={size}
          selected={selectedOptions.map((option) => option.value).includes(option.value)}
          onClick={() => {
            if (!selectMultiple) {
              setSelectedOptions([option]);
            } else {
              if (selectedOptions.map((option) => option.value).includes(option.value)) {
                setSelectedOptions(selectedOptions.filter((item) => item.value !== option.value));
              } else {
                setSelectedOptions([...selectedOptions, option]);
              }
            }
          }}>
          <div>{option.label}</div>
          {selectedOptions.map((option) => option.value).includes(option.value) && <Icon name='check' size={'s'} />}
        </List>
      ))}
    </div>
  );
};

export default Dropdown;

const fontStyles = (size: 
'xs' | 's' | 'm'
) => {
  const styles = {
    xs: {
      fontSize: '12px',
      lineHeight: '20px',
    },
    s: {
      fontSize: '14px',
      lineHeight: '24px',
    },
    m: {
      fontSize: '16px',
      lineHeight: '28px',
    },
  };

  const baseStyle = {
    fontWeight: 400,
  };

  const pressedStyle = {
    fontWeight: 600,
  };

  const style = styles[size] || styles.m; // Default to 'm' if size is not matched

  return {
    default: { ...baseStyle, ...style },
    hover: { ...baseStyle, ...style },
    pressed: { ...pressedStyle, ...style },
    disabled: { ...baseStyle, ...style },
  };
};

const List = styled.button.attrs((props) => ({
  className: `flex items-center justify-between rounded-lg p-1.5 gap-2 whitespace-nowrap w-full`,
}))`
  ${({ disabled }) => disabled && `cursor: not-allowed;`}

  background-color: ${colors.background.LIGHT_1};
  color: ${colors.text.DARK_1};
  ${({ size }: any) => fontStyles(size).default}
  &:hover {
    background-color: ${colors.fill.DARK_3};
    color: ${colors.text.DARK_1};
    ${({ size }: any) => fontStyles(size).hover}
  &:active {
    background-color: ${colors.fill.DARK_2};
    color: ${colors.text.DARK_1};
    ${({ size }: any) => fontStyles(size).pressed}
  }
  &:disabled {
    background-color: ${colors.background.LIGHT_1};
    color: ${colors.text.DARK_3};
    ${({ size }: any) => fontStyles(size).disabled}
  }
`;
