import {WeatherEntity} from '../../entities/home';

export interface HomeRepository {
  getWeather(city: string): Promise<WeatherEntity>;
}
