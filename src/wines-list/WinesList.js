import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import WineCard from './WineCard.js'

export default class WinesList extends React.Component {
    render() {
        return(
            <FlatList style={styles.listContainer}
                data={this.props.data}
                renderItem={({item}) =>
                    <WineCard 
                        imageUrl={item.imageUrl}
                        name={item.name}
                        year={item.year}
                        appelation={item.appelation}
                    />
                }
                keyExtractor={(item, index) => item.id}
            />
        );
    }

}

const styles = StyleSheet.create({
    listContainer: {
        alignSelf: 'stretch',
        flex: 1,
        paddingLeft: 8,
        paddingRight: 8,
      },
      item: {
        backgroundColor: '#fff',
        padding: 8,
        marginTop: 8,        
      },
      name: {
        fontSize: 18,
      },
      year: {
        fontSize: 14
      },
      appelation: {
          fontSize: 16,
          fontWeight: 'bold',
      }
});
