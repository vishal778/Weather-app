import {homeDataSource} from '../../../data/datasources/homeDataSource';
import {HomeRepositoryImpl} from '../../../data/repositories/homeRepositoryImpl';
import {WeatherEntity} from '../../entities/home';
import {HomeRepository} from '../../repositories/home';
export class HomeUseCase {
  constructor(private homeRepository: HomeRepository) {}

  async getWeather(city: string): Promise<WeatherEntity> {
    return this.homeRepository.getWeather(city);
  }
}

export const HomeUseCases = new HomeUseCase(
  new HomeRepositoryImpl(new homeDataSource()),
);
