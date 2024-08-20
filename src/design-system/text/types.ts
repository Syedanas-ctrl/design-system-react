export enum FontType {
  H1_L = 'H1_L',
  H1_B = 'H1_B',

  H2_L = 'H2_L',
  H2_B = 'H2_B',

  H3_L = 'H3_L',
  H3_B = 'H3_B',

  H4_L = 'H4_L',
  H4_B = 'H4_B',

  BODY_L = 'BODY_L',
  BODY_B = 'BODY_B',

  SMALL_L = 'SMALL_L',
  SMALL_B = 'SMALL_B',

  TINY_L = 'TINY_L',
  TINY_B = 'TINY_B',
}

export const FONT_VALUES_DESKTOP: Record<FontType, string> = {
  [FontType.H1_L]: 'L_2.25_2.75',
  [FontType.H1_B]: 'B_2.25_2.75',
  [FontType.H2_L]: 'L_1.5_2',
  [FontType.H2_B]: 'B_1.5_2',
  [FontType.H3_L]: 'L_1.25_1.75',
  [FontType.H3_B]: 'B_1.25_1.75',
  [FontType.H4_L]: 'L_1_1.5',
  [FontType.H4_B]: 'B_1_1.5',
  [FontType.BODY_L]: 'L_0.875_1.5',
  [FontType.BODY_B]: 'B_0.875_1.5',
  [FontType.SMALL_L]: 'L_0.75_1.25',
  [FontType.SMALL_B]: 'B_0.75_1.25',
  [FontType.TINY_L]: 'L_0.625_1',
  [FontType.TINY_B]: 'B_0.625_1',
};

export const FONT_VALUES_MOBILE: Record<FontType, string> = {
  [FontType.H1_L]: 'L_2.375_2.75',
  [FontType.H1_B]: 'B_2.375_2.75',
  [FontType.H2_L]: 'L_1.625_2',
  [FontType.H2_B]: 'B_1.625_2',
  [FontType.H3_L]: 'L_1.375_1.75',
  [FontType.H3_B]: 'B_1.375_1.75',
  [FontType.H4_L]: 'L_1.125_1.5',
  [FontType.H4_B]: 'B_1.125_1.5',
  [FontType.BODY_L]: 'L_1_1.5',
  [FontType.BODY_B]: 'B_1_1.5',
  [FontType.SMALL_L]: 'L_0.875_1.25',
  [FontType.SMALL_B]: 'B_0.875_1.25',
  [FontType.TINY_L]: 'L_0.625_1',
  [FontType.TINY_B]: 'B_0.625_1',
};
