import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {theme} from './themes';
import Home from './screens/Home';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Home />
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
