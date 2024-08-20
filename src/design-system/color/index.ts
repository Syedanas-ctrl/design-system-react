import { BackgroundPalette, FillPalette, IColor, PaletteType, StrokePalette, TextPalette } from './types';

type PaletteKeys = keyof typeof PaletteType;
export const palette: { [key in PaletteKeys]: string } = {
  //lights
  GREYS_100: '#FFFFFF',
  GREYS_100_10: '#FFFFFF1A',
  GREYS_100_20: '#FFFFFF33',
  GREYS_100_40: '#FFFFFF66',
  GREYS_100_50: '#FFFFFF80',
  GREYS_100_75: '#FFFFFFBF',

  GREYS_200: '#F5F5F5',
  GREYS_300: '#EDEDED',
  //darks
  GREYS_400: '#333333',
  GREYS_500: '#262626',
  GREYS_600: '#0F0F0F',
  GREYS_600_5: '#0F0F0F0D',
  GREYS_600_10: '#0F0F0F1A',
  GREYS_600_15: '#0F0F0F26',
  GREYS_600_30: '#0F0F0F4D',
  GREYS_600_40: '#0F0F0F66',
  GREYS_600_60: '#0F0F0F99',

  PRIMARY_900: '#21143F',
  PRIMARY_800: '#321C6D',
  PRIMARY_700: '#45239A',
  PRIMARY_600: '#572AC8',
  PRIMARY_500: '#6E42E5',
  PRIMARY_400: '#997BED',
  PRIMARY_300: '#C5B4F5',
  PRIMARY_200: '#E2D9FA',
  PRIMARY_100: '#F0ECFC',

  SECONDARY_900: '#012749',
  SECONDARY_800: '#003A6D',
  SECONDARY_700: '#00539A',
  SECONDARY_600: '#0072C3',
  SECONDARY_500: '#1192E8',
  SECONDARY_400: '#33B1FF',
  SECONDARY_300: '#82CFFF',
  SECONDARY_200: '#BAE6FF',
  SECONDARY_100: '#E5F6FF',

  WARNING_900: '#36100F',
  WARNING_800: '#61140B',
  WARNING_700: '#8A1E08',
  WARNING_600: '#B32306',
  WARNING_500: '#DC2804',
  WARNING_400: '#E7685A',
  WARNING_300: '#F2ADA5',
  WARNING_200: '#F9D9D7',
  WARNING_100: '#FCEEED',

  CAUTION_900: '#3D2C0B',
  CAUTION_800: '#705010',
  CAUTION_700: '#A17217',
  CAUTION_600: '#D29822',
  CAUTION_500: '#FFC247',
  CAUTION_400: '#FFD47F',
  CAUTION_300: '#FFE0A3',
  CAUTION_200: '#FFEDC8',
  CAUTION_100: '#FFF6E3',

  SUCCESS_900: '#0D2A1E',
  SUCCESS_800: '#0B442D',
  SUCCESS_700: '#0D6027',
  SUCCESS_600: '#07794C',
  SUCCESS_500: '#05945B',
  SUCCESS_400: '#50B47F',
  SUCCESS_300: '#89CCA9',
  SUCCESS_200: '#BBE2CE',
  SUCCESS_100: '#EDF7F2',
};

//tailwind color configuration
export const colors: IColor = {
  palette: palette,
  background: {
    [BackgroundPalette.LIGHT_1]: palette.GREYS_100,
    [BackgroundPalette.LIGHT_2]: palette.GREYS_200,
    [BackgroundPalette.LIGHT_3]: palette.GREYS_300,

    [BackgroundPalette.DARK_1]: palette.GREYS_600,
    [BackgroundPalette.DARK_2]: palette.GREYS_500,
    [BackgroundPalette.DARK_3]: palette.GREYS_400,
  },
  text: {
    [TextPalette.DARK_1]: palette.GREYS_600,
    [TextPalette.DARK_2]: palette.GREYS_600_60,
    [TextPalette.DARK_3]: palette.GREYS_600_30,

    [TextPalette.LIGHT_1]: palette.GREYS_100,
    [TextPalette.LIGHT_2]: palette.GREYS_100_75,
    [TextPalette.LIGHT_3]: palette.GREYS_100_50,
  },
  fill: {
    [FillPalette.DARK_1]: palette.GREYS_600,
    [FillPalette.DARK_2]: palette.GREYS_600_10,
    [FillPalette.DARK_3]: palette.GREYS_600_5,

    [FillPalette.LIGHT_1]: palette.GREYS_100,
    [FillPalette.LIGHT_2]: palette.GREYS_100_20,
    [FillPalette.LIGHT_3]: palette.GREYS_100_10,
  },
  stroke: {
    [StrokePalette.DARK_1]: palette.GREYS_600,
    [StrokePalette.DARK_2]: palette.GREYS_600_40,
    [StrokePalette.DARK_3]: palette.GREYS_600_15,

    [StrokePalette.LIGHT_1]: palette.GREYS_100,
    [StrokePalette.LIGHT_2]: palette.GREYS_100_40,
    [StrokePalette.LIGHT_3]: palette.GREYS_100_20,
  },
};
