/* eslint-disable no-console */
import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import Routes from './routes';

console.disableYellowBox = true;

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => (
  <KeyboardAvoidingView
    behavior="position"
    style={s.container}
    contentContainerStyle={s.container}
    keyboardVerticalOffset={-400}
  >
    <Routes />
  </KeyboardAvoidingView>
);

export default App;
