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
                        wine={item} 
                        onCardClicked={this.props.onCardClicked}
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
      }
});
