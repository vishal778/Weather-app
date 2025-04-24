import {useState} from 'react';
import {HomeUseCases} from '../../../domain/usecases/homeUseCase';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme, setWeatherData} from '../../../redux/actions/homeActions';
import {RootState} from '../../../redux/reducers';
import {THEME} from '../../../redux/reducers/home';

const useHomeData = () => {
  const [error, setError] = useState<string | null>(null);
  const [currentCity, setCurrentCity] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const {weatherData, theme} = useSelector(
    (state: RootState) => state.HomeReducer,
  );
  const fetchWeatherOnCityName = async () => {
    try {
      setLoading(true);
      const response = await HomeUseCases.getWeather(currentCity || '');
      if (response && !isCityAlreadyAdded(response.city)) {
        dispatch(setWeatherData(response));
      }
      setLoading(false);
    } catch {
      setError('Invalid city name');
      setLoading(false);
    }
  };

  const isCityAlreadyAdded = (city: string) => {
    return weatherData?.some(
      item => item.city.toLowerCase() === city.toLowerCase(),
    );
  };

  const toggleTheme = () => {
    dispatch(changeTheme(theme === THEME.dark ? THEME.light : THEME.dark));
  };

  const updateCurrentCity = (city: string) => {
    if (error) {
      setError(null);
    }
    setCurrentCity(city);
  };

  return {
    fetchWeatherOnCityName,
    error,
    weatherData,
    updateCurrentCity,
    currentCity,
    loading,
    toggleTheme,
  };
};

export default useHomeData;
