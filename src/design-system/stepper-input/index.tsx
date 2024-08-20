import clsx from 'clsx';
import React from 'react';
import Text from '../text';
import Icon from '../icon';
import { PaletteType } from '../color/types';
import { FontType } from '../text/types';

interface NumberProps {
  quantity: number;
  maxQuantity: number;
  minQuantity: number;
  changeQuantity: (quantity: number) => void;
}

interface BooleanProps {
  isAdded: boolean;
  add: (isAdded: boolean) => void;
}

interface StepperInputProps {
  type: 'number' | 'boolean';
  quantityProps?: NumberProps;
  booleanProps?: BooleanProps;
  disabled?: boolean;
}

const StepperInput = (props: StepperInputProps) => {
  if (props.type === 'number') {
    return (
      <button
        className={clsx(
          'outline outline-1 outline-stroke-DARK_3 rounded-lg',
          'flex items-center justify-center gap-2',
          'w-20 h-fit py-1',
          props.quantityProps?.quantity ? 'bg-palette-PRIMARY_100' : 'bg-background-LIGHT_1',
        )}
        disabled={props.disabled}>
        {props.quantityProps?.quantity ? (
          <Icon
            name='remove'
            size='xs'
            onClick={() => {
              if (props.quantityProps?.quantity || 0 > (props.quantityProps?.minQuantity || 0)) {
                props.quantityProps?.changeQuantity(props.quantityProps?.quantity - 1);
              }
            }}
            color={
              props.disabled || props.quantityProps?.quantity <= props.quantityProps?.minQuantity
                ? PaletteType.PRIMARY_300
                : PaletteType.PRIMARY_600
            }
          />
        ) : (
          <></>
        )}
        <Text font={FontType.BODY_B} color={props.disabled ? PaletteType.PRIMARY_300 : PaletteType.PRIMARY_600}>
          {props.quantityProps?.quantity || 'Add'}
        </Text>
        {props.quantityProps?.quantity ? (
          <Icon
            name='add'
            size='xs'
            color={
              props.disabled || props.quantityProps?.quantity >= props.quantityProps?.maxQuantity
                ? PaletteType.PRIMARY_300
                : PaletteType.PRIMARY_600
            }
            onClick={() => {
              if ((props.quantityProps?.quantity || 0) < (props.quantityProps?.maxQuantity || 0)) {
                props.quantityProps?.changeQuantity(props.quantityProps?.quantity + 1);
              }
            }}
          />
        ) : (
          <></>
        )}
      </button>
    );
  } else if (props.type === 'boolean') {
    return (
      <button
        className={clsx(
          'outline outline-1 outline-stroke-DARK_3 rounded-lg py-1 w-20 h-fit',
          'flex items-center justify-center',
          props.booleanProps?.isAdded ? 'bg-palette-PRIMARY_100' : 'bg-background-LIGHT_1',
        )}
        onClick={() => props.booleanProps?.add(!props.booleanProps.isAdded)}
        disabled={props.disabled}>
        <Text font={FontType.BODY_B} color={props.disabled ? PaletteType.PRIMARY_300 : PaletteType.PRIMARY_600}>
          {props.booleanProps?.isAdded ? 'Added' : 'Add'}
        </Text>
      </button>
    );
  }
};

export default StepperInput;
