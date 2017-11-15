import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import WinesList from './src/wines-list/WinesList.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Let's try to make a list!</Text>
        <WinesList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 42,
    flex: 1,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('WinesList', () => WinesList)
