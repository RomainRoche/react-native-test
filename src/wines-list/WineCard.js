import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class WineCard extends React.Component {

    render() {
        return(
            <TouchableOpacity onPress={() => this.props.onCardClicked(this.props.wine)}>
                <View style={styles.card}>
                    <Image style={styles.image} source={{uri: this.props.wine.imageUrl}} />
                    <View style={styles.infos}>
                        <Text style={styles.name}>
                            {this.props.wine.name}
                            <Text style={styles.year}>, {this.props.wine.year}</Text>
                        </Text>
                        <Text style={styles.appelation}>{this.props.wine.appelation}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        marginTop: 16,
        overflow: 'hidden',
        borderRadius: 8,
        borderColor: 'red'
    },
    image: {
        height: 200,
        flex: 2,
        alignSelf: 'stretch',
    },
    infos: {
        flex: 1,
        alignSelf: 'stretch',
        padding: 8,
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
