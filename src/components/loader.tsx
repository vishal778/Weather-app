import React from 'react';
import {ActivityIndicator, StyleSheet, View, ViewStyle} from 'react-native';

interface LoaderProps {
  size?: 'small' | 'large';

  containerStyle?: ViewStyle;
}

const Loader: React.FC<LoaderProps> = ({size = 'large', containerStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <ActivityIndicator size={size} color={'#ffffff'} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,

    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
});
