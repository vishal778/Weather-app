import React from 'react';
import {View, Switch, StyleSheet} from 'react-native';

interface ThemeToggleProps {
  isEnabled: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({isEnabled, onToggle}) => {
  return (
    <View style={styles.container}>
      <Switch
        value={isEnabled}
        onValueChange={onToggle}
        thumbColor={isEnabled ? '#00C853' : '#FFFFFF'}
        trackColor={{
          false: '#B0BEC5',
          true: '#A5D6A7',
        }}
      />
    </View>
  );
};

export default ThemeToggle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
});
