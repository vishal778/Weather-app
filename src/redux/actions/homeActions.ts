import {WeatherEntity} from '../../domain/entities/home';
import {THEME} from '../reducers/home';

export const setWeatherData = (data: WeatherEntity) => {
  return {
    type: 'SET_WEATHER_DATA',
    payload: data,
  };
};

export const changeTheme = (theme: THEME) => {
  return {
    type: 'SET_THEME',
    payload: theme,
  };
};
