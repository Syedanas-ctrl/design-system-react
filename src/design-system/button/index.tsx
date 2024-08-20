import styled from 'styled-components';

import { colors } from '../color';
import Icon from '../icon';
import Text from '../text';
import { FontType } from '../text/types';

interface IButtonProps {
  size?: 'small' | 'large';
  type?: 'primary' | 'secondary' | 'tertiary';
  view?: 'text' | 'icon' | 'icon-text';
  text?: string;
  disabled?: boolean;
  iconPostion?: 'left' | 'right';
  icon?: string;
  isSelected?: boolean;
  onClick?: () => void;
  fullWidth?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  size = 'large',
  type = 'primary',
  disabled = false,
  view = 'icon-text',
  text,
  icon,
  iconPostion = 'right',
  isSelected,
  onClick,
  fullWidth = false,
  isLoading = false,
}) => {
  return (
    <ButtonWrapper
      fullWidth={fullWidth}
      isSelected={isSelected}
      size={size}
      // @ts-ignore
      type={type}
      disabled={disabled}
      onClick={onClick}>
      {isLoading ? (
        <div className='animate-[spin_1s_ease-in-out_infinite]'>
          <Icon size={'s'} name={'progress_activity'} />
        </div>
      ) : (
        <>
          {(view === 'icon-text' || view === 'icon') && iconPostion === 'left' && (
            <Icon size={'s'} name={icon || 'chevron_backward'} />
          )}
          {(view === 'icon-text' || view === 'text') && (
            <Text type='p' font={FontType.BODY_B}>
              {text}
            </Text>
          )}
          {(view === 'icon-text' || view === 'icon') && iconPostion === 'right' && (
            <Icon size={'s'} name={icon || 'chevron_forward'} />
          )}
        </>
      )}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonStyles = (type: "primary" |
"secondary" | "tertiary"
) => {
  switch (type) {
    case 'primary':
      return {
        default: {
          backgroundColor: colors.palette.PRIMARY_500,
          color: colors.text.LIGHT_1,
        },
        hover: {
          backgroundColor: colors.palette.PRIMARY_600,
          color: colors.text.LIGHT_1,
        },
        pressed: {
          backgroundColor: colors.palette.PRIMARY_700,
          color: colors.text.LIGHT_1,
        },
        disabled: {
          backgroundColor: colors.fill.DARK_2,
          color: colors.text.DARK_3,
        },
      };
    case 'secondary':
      return {
        default: {
          backgroundColor: colors.fill.LIGHT_1,
          color: colors.text.DARK_1,
          outlineColor: colors.stroke.DARK_3,
        },
        hover: {
          backgroundColor: colors.fill.LIGHT_1,
          color: colors.text.DARK_1,
          outlineColor: colors.stroke.DARK_2,
        },
        pressed: {
          backgroundColor: colors.fill.LIGHT_1,
          color: colors.text.DARK_1,
          outlineColor: colors.stroke.DARK_1,
        },
        disabled: {
          backgroundColor: colors.fill.LIGHT_1,
          color: colors.text.DARK_3,
          outlineColor: colors.stroke.DARK_3,
        },
      };
    case 'tertiary':
      return {
        default: {
          color: colors.palette.PRIMARY_500,
        },
        hover: {
          color: colors.palette.PRIMARY_600,
        },
        pressed: {
          color: colors.palette.PRIMARY_700,
        },
        disabled: {
          color: colors.fill.DARK_3,
        },
      };
  }
};

const ButtonWrapper = styled.button.attrs((props) => ({
  className: `flex items-center justify-center rounded-lg gap-2 whitespace-nowrap`,
}))`
  ${({ size, fullWidth }: any) => {
    switch (size) {
      case 'small':
        return `width: ${fullWidth ? '100%' : 'fit-content'};`;
      case 'large':
        return `width: 100%;`;
    }
  }}
  ${({ type, size }: any) => {
    switch (type) {
      case 'tertiary':
        return 'border: none; padding: 6px 0px 6px 0px;';
      case 'primary':
        return {
          border: 'none',
          padding: size === 'small' ? '6px 16px' : '12px 16px',
        };
      case 'secondary':
        return {
          outline: '1px solid',
          padding: size === 'small' ? '6px 16px' : '12px 16px',
        };
    }
  }}

  ${({ disabled }) => disabled && `cursor: not-allowed;`}

  ${({ isSelected }: any) =>
    isSelected ? ({ type }: any) => ButtonStyles(type).pressed : ({ type }: any) => ButtonStyles(type).default}
  &:hover {
    ${({ type }: any) => ButtonStyles(type).hover}
  }
  &:active {
    ${({ type }: any) => ButtonStyles(type).pressed}
  }
  &:disabled {
    ${({ type }: any) => ButtonStyles(type).disabled}
  }
`;
