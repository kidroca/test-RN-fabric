/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react';
import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Composer from './Composer';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const style = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  };

  return (
    <SafeAreaView style={style}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>Test Android text selection and context menu</Text>
      <Composer comment="Type something here..." />
    </SafeAreaView>
  );
};

export default App;
