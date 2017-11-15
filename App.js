import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import WinesList from './src/wines-list/WinesList.js';
import Wine from './src/wines-list/Wine.js';

export default class App extends React.Component {
  
  static Wines = [
    new Wine(0, 'La Louviere', 2010, 'Pessac Leognan'),
    new Wine(1, 'Sociando-Mallet', 2008, 'Haut Médoc'),
    new Wine(2, 'Château Fourcas Dupré', 2009, 'Listrac Médoc'),
    new Wine(3, 'Les lauzières ', 2010, 'Côte rotie'),
    new Wine(4, 'Château Citran', 2009, 'Haut Médoc'),
  ];
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Let's try to make a list!</Text>
        <WinesList 
          data={App.Wines}
        />
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
