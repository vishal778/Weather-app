import {WeatherEntity} from '../../../domain/entities/home';
import {HomeRepository} from '../../../domain/repositories/home';
import {homeDataSource} from '../../datasources/homeDataSource';

export class HomeRepositoryImpl implements HomeRepository {
  constructor(private apiDataSource: homeDataSource) {}

  async getWeather(city: string): Promise<WeatherEntity> {
    const data = await this.apiDataSource.fetchWeather(city);

    return {
      city: data.location.name,
      temperature: data.current.temperature,
      condition: data.current.weather_descriptions[0],
      icon: data.current.weather_icons[0],
    };
  }
}
