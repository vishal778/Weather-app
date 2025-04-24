import {useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';
import {THEME} from '../redux/reducers/home';
import TYPOGRAPHY, {ColorType} from './typography';

export interface ThemeProps {
  colors: ColorType;
}

export const LightTheme: ThemeProps = {
  colors: TYPOGRAPHY.ThemeColor.light,
};
export const DarkTheme: ThemeProps = {
  colors: TYPOGRAPHY.ThemeColor.dark,
};

const useTheme = () => {
  const {theme} = useSelector((state: RootState) => state.HomeReducer);
  const {colors} = theme === THEME.light ? LightTheme : DarkTheme;
  return colors;
};

export default useTheme;
