import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import HomeScreen from './src/home-screen/Home';
import WinesList from './src/wines-list/WinesList.js';
import Wine from './src/wines-list/Wine.js';

export default class App extends React.Component {
  
  render() {
    return (
      <HomeScreen />
    );
  }
  
}
