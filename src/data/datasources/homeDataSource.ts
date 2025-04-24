import {apiUrls} from '../../config';
import {WeatherApiResponse} from '../../domain/entities/home';
import {get} from '../../service/api';

export class homeDataSource {
  async fetchWeather(city: string) {
    const url = apiUrls.fetchWeather.replace('{QUERY_NAME}', city);

    const response: WeatherApiResponse = await get(url);

    if (response.success === false) {
      const errorMessage =
        response.error?.info || 'Unknown error from weather API';
      throw new Error(errorMessage);
    }

    return response;
  }
}
