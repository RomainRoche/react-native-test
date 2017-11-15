import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class WinesList extends React.Component {
    render() {
        return(
            <FlatList style={styles.listContainer}
                data={this.props.data}
                renderItem={({item}) =>
                    <View style={styles.item}>
                        <Text style={styles.name}>
                            {item.name}
                            <Text style={styles.year}>, {item.year}</Text>
                        </Text>
                        <Text style={styles.appelation}>{item.appelation}</Text>
                    </View>
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
        marginTop: 8,
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
