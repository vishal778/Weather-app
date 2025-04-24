import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import useHomeData from './presenter';
import Loader from '../../../components/loader';
import useTheme from '../../../dls/themeHook';
import ThemeToggle from '../../../components/switch';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reducers';
import {THEME} from '../../../redux/reducers/home';

const Home = () => {
  const {
    fetchWeatherOnCityName,
    currentCity,
    updateCurrentCity,
    weatherData,
    error,
    loading,
    toggleTheme,
  } = useHomeData();

  const colors = useTheme();
  const theme = useSelector((state: RootState) => state.HomeReducer.theme);

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.primaryBackground}]}>
      <View style={styles.header}>
        <Text style={styles.themeText} onPress={toggleTheme}>
          {`Switch to ${theme === THEME.dark ? 'light' : 'dark'} mode`}
        </Text>
        <ThemeToggle isEnabled={theme === THEME.dark} onToggle={toggleTheme} />
      </View>

      <TextInput
        placeholder="Enter city name"
        value={currentCity}
        style={styles.input}
        onChangeText={updateCurrentCity}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Pressable onPress={fetchWeatherOnCityName} style={styles.button}>
        <Text>Done</Text>
      </Pressable>

      {weatherData?.map(item => {
        return (
          <View
            key={item.city}
            style={[
              styles.card,
              {backgroundColor: colors.secondaryBackground},
            ]}>
            <Image source={{uri: item.icon}} style={styles.icon} />
            <View style={styles.cityInfo}>
              <Text style={styles.cityName}>{item.city}</Text>
              <Text style={styles.condition}>{item.condition}</Text>
            </View>
            <View style={styles.tempContainer}>
              <Text style={styles.temp}>{item.temperature}</Text>
            </View>
            <View style={styles.divider} />
          </View>
        );
      })}
      {loading ? <Loader /> : null}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: 10,
  },
  themeText: {
    color: 'white',
    marginRight: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    backgroundColor: '#ffffff',
  },
  button: {
    alignSelf: 'center',
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#333333',
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#ffffff',
  },
  card: {
    borderRadius: 8,
    flexDirection: 'row',
    padding: 16,
    marginTop: 24,
    alignItems: 'center',
  },
  icon: {
    height: 50,
    width: 50,
  },
  cityInfo: {
    marginLeft: 16,
    justifyContent: 'center',
  },
  cityName: {
    color: '#ffffff',
    fontWeight: '800',
    fontSize: 16,
  },
  condition: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 12,
  },
  tempContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  temp: {
    color: '#ffffff',
    fontSize: 18,
  },
  divider: {
    borderWidth: 1,
    borderColor: '#ffffff',
    padding: 2,
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: -9,
    marginLeft: 2,
  },
  errorText: {
    color: 'white',
    marginTop: 10,
  },
});
