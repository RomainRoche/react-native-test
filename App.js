import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/home-screen/Home';
import WineScreen from './src/wines-list/WineScreen';

const AppStack = StackNavigator({
  Home: { 
    screen: HomeScreen,
    navigationOptions: {
      title: 'Wines list'
    }
  },
  WineScreen: {
    screen: WineScreen
  }
});

export default class App extends React.Component {
  
  render() {
    return (
      <AppStack />
    );
  }

}