import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import Keyboard from './components/Keyboard';
import {theme} from './theme';

const App = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <StatusBar barStyle={'light-content'} />
      <Text style={styles.header}>WORDLE</Text>
      <Keyboard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    color: theme.colors.text,
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: '900',
  },
});

export default App;
