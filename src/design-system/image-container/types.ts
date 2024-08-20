export enum ImageType {
  SQUARED = 'squared',
  BANNER = 'banner',
}

export enum SquaredSize {
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
  XXL = 'xxl',
}

export enum BannerSize {
  S = 'b_s',
  M = 'b_m',
  L = 'b_l',
}

export const sizeMapping: Record<SquaredSize | BannerSize, number> = {
  [SquaredSize.XS]: 24,
  [SquaredSize.S]: 36,
  [SquaredSize.M]: 48,
  [SquaredSize.L]: 72,
  [SquaredSize.XL]: 96,
  [SquaredSize.XXL]: 128,
  [BannerSize.S]: 120,
  [BannerSize.M]: 180,
  [BannerSize.L]: 240,
};
