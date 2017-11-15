import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import WinesList from './src/wines-list/WinesList.js';
import Wine from './src/wines-list/Wine.js';

export default class App extends React.Component {
  
  static Wines = [
    new Wine(0, 'La Louviere', 2010, 'Pessac Leognan', 'http://www.winedecider.com/label/JPEG/FRBDGRPELxxRLOURE18x.jpg'),
    new Wine(1, 'Sociando-Mallet', 2008, 'Haut Médoc', 'http://www.chateauloisel.com/img_bg/01003605.jpg'),
    new Wine(2, 'Château Fourcas Dupré', 2009, 'Listrac Médoc', 'https://cdn.ct-static.com/labels/426181.jpg'),
    new Wine(3, 'Les lauzières ', 2010, 'Côte rotie', 'https://wine-searcher1.freetls.fastly.net/images/labels/02/10/tardieu-laurent-cote-rotie-les-lauzieres-rhone-france-10730210.jpg'),
    new Wine(4, 'Château Citran', 2009, 'Haut Médoc', 'http://www.mondovino.com/8182-16044-thickbox/ch%C3%A2teau-citran-2010-magnum.jpg'),
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
    paddingBottom: 22,
    flex: 1,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('WinesList', () => WinesList)
