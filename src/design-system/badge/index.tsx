import { useMemo } from "react";
import { colors } from "../color";
import { FillPalette, TextPalette, PaletteType, BackgroundPalette } from "../color/types";
import Icon from "../icon";
import { FontType } from "../text/types";
import Text from "../text";
import Image from "next/image";

interface BadgeProps {
  type: "default" | "info" | "warning" | "caution" | "success";
  group: "icon" | "text";
  showIcon?: boolean;
  text: string;
  fill?: boolean;
  icon?: string;
  image?: string;
  boxed?: "light" | "dark";
}

const Badge: React.FC<BadgeProps> = ({ type, group, showIcon = false, text = '', boxed, icon, fill = true, image }) => {
  const badgeColors = useMemo(() => {
    switch (type) {
      case 'default':
        return fill && boxed === 'dark'
          ? {
              background: BackgroundPalette.DARK_1,
              text: TextPalette.LIGHT_1,
            }
          : {
              background: FillPalette.DARK_3,
              text: TextPalette.DARK_1,
            };
      case 'info':
        return fill && boxed === 'dark'
          ? {
              background: PaletteType.SECONDARY_600,
              text: TextPalette.LIGHT_1,
            }
          : {
              background: PaletteType.SECONDARY_100,
              text: PaletteType.SECONDARY_600,
            };
      case 'warning':
        return fill && boxed === 'dark'
          ? {
              background: PaletteType.WARNING_600,
              text: TextPalette.LIGHT_1,
            }
          : {
              background: PaletteType.WARNING_100,
              text: PaletteType.WARNING_600,
            };
      case 'caution':
        return fill && boxed === 'dark'
          ? {
              background: PaletteType.CAUTION_600,
              text: TextPalette.LIGHT_1,
            }
          : {
              background: PaletteType.CAUTION_100,
              text: PaletteType.CAUTION_600,
            };
      case 'success':
        return fill && boxed === 'dark'
          ? {
              background: PaletteType.SUCCESS_600,
              text: TextPalette.LIGHT_1,
            }
          : {
              background: PaletteType.SUCCESS_100,
              text: PaletteType.SUCCESS_600,
            };
    }
  }, [type, fill, boxed]);

  return (
    <Text
      type='span'
      style={{
        backgroundColor: fill
          ? Object.keys(FillPalette).includes(badgeColors.background)
            ? colors.fill[badgeColors.background as FillPalette]
            : Object.keys(BackgroundPalette).includes(badgeColors.background)
            ? colors.background[badgeColors.background as BackgroundPalette]
            : colors.palette[badgeColors.background as PaletteType]
          : 'transparent',
      }}
      className={`${text && showIcon ? 'p-[1px] pr-[8px] pl-[4px]' : text && !showIcon ? 'px-2' : ''} ${
        showIcon ? '' : 'py-0.5'
      } w-fit h-fit rounded flex items-center gap-0.5 whitespace-nowrap`}
      color={badgeColors.text}
      font={FontType.SMALL_B}>
      {showIcon && (
        <div className='p-0.5 flex items-center justify-center'>
          {icon && <Icon size='xs' name={icon || 'info'} />}
          {!icon && image && <Image src={image} alt='badge' width={20} height={20} />}
        </div>
      )}
      {group === 'text' ? text : undefined}
    </Text>
  );
};
export default Badge;
