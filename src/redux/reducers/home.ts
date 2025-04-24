import {WeatherEntity} from '../../domain/entities/home';

export enum THEME {
  light = 'light',
  dark = 'dark',
}

export interface IHomeState {
  weatherData: WeatherEntity[];
  theme: THEME;
}
const INITIAL_STATE = {
  weatherData: [],
  theme: THEME.light,
};

export default (
  state: IHomeState = INITIAL_STATE,
  actions: {type: string} & any,
) => {
  switch (actions.type) {
    case 'SET_WEATHER_DATA':
      return {...state, weatherData: [...state.weatherData, actions.payload]};
    case 'SET_THEME':
      return {...state, theme: actions.payload};
    default:
      return state;
  }
};
