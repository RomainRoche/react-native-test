import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WinesList from '../wines-list/WinesList';
import Wine from '../wines-list/Wine';

export default class HomeScreen extends React.Component {

    // static mock data
    static Wines = [
        new Wine(0, 'La Louviere', 2010, 'Pessac Leognan', 'http://www.winedecider.com/label/JPEG/FRBDGRPELxxRLOURE18x.jpg'),
        new Wine(1, 'Sociando-Mallet', 2008, 'Haut Médoc', 'http://www.lafdv.fr/imagesTaw/o/32444_org.jpg'),
        new Wine(2, 'Château Fourcas Dupré', 2009, 'Listrac Médoc', 'https://cdn.ct-static.com/labels/426181.jpg'),
        new Wine(3, 'Les Lauzières ', 2010, 'Côte rotie', 'https://wine-searcher1.freetls.fastly.net/images/labels/02/10/tardieu-laurent-cote-rotie-les-lauzieres-rhone-france-10730210.jpg'),
        new Wine(4, 'Château Citran', 2009, 'Haut Médoc', 'http://www.mondovino.com/8182-16044-thickbox/ch%C3%A2teau-citran-2010-magnum.jpg'),
    ];

    render() {
        return (
            <View style={styles.container}>
                <Text>Let's try to make a list!</Text>
                <WinesList 
                    data={HomeScreen.Wines}
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
