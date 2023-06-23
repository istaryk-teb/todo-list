/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, ScrollView, useColorScheme, } from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';
import { EntryComponent } from './app/components/EntryComponent';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <EntryComponent></EntryComponent>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
