const lightColors = {
  primaryBackground: '#523D7F',
  secondaryBackground: '#957DCD',
};

const darkColors = {
  ...lightColors,
  primaryBackground: '#101010',
  secondaryBackground: '#BFBFBF',
};

export type ColorType = typeof lightColors | typeof darkColors;

export type ThemeColorProps = {
  light: ColorType;
  dark: ColorType;
};

const ThemeColor: ThemeColorProps = {
  light: lightColors,
  dark: darkColors,
};

const TYPOGRAPHY = {
  ThemeColor,
};

export default TYPOGRAPHY;
