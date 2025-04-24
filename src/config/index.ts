//can store ACCESS_KEY using in env file and fetch here using react-native-config.

const ACCESS_KEY = '412d4c56620b0e91ceaefb6e6b9be812';

export const apiUrls = {
  fetchWeather: `/current?access_key=${ACCESS_KEY}&query={QUERY_NAME}`,
};
