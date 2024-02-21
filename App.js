/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text} from 'react-native';

function App() {
  return <Header />;
}

function Header() {
  return <Text style={styles.sectionContainer}> Velkommen </Text>;
}
const styles = StyleSheet.create({
  sectionContainer: {
    // marginTop: 32,
    // paddingHorizontal: 24,
    textAlign: 'center',
  },
});

export default App;
