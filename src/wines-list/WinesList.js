import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

export default class WinesList extends React.Component {

    render() {
        return(
            <FlatList style={styles.listContainer}
                data={[
                    {key: 0, name: 'La Louvière'},
                    {key: 1, name: 'La Louvière'},
                    {key: 2, name: 'La Louvière'},
                    {key: 3, name: 'La Louvière'},
                    {key: 4, name: 'La Louvière'},
                    {key: 5, name: 'La Louvière'},
                ]}
                renderItem={({item}) =>
                    <Text style={styles.item}>{item.name}</Text>
                }
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
        backgroundColor: '#fff',
      },
      item: {
        backgroundColor: '#f0f0f0',
        padding: 8,
        marginTop: 8,
        fontSize: 18,
        height: 44
      }
});
