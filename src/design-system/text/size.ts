

import useMediaQuery from '@/hooks/media';
import { FONT_VALUES_DESKTOP, FONT_VALUES_MOBILE, FontType } from './types';

const useFontSize = (fontType: FontType): string => {
  const isMobile = useMediaQuery();
  return isMobile ? FONT_VALUES_MOBILE[fontType] : FONT_VALUES_DESKTOP[fontType];
};

export default useFontSize;
