import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class WineCard extends React.Component {

    render() {
        return(
            <View style={styles.card}>
                <Image style={styles.image} source={{uri: this.props.imageUrl}} />
                <View style={styles.infos}>
                    <Text style={styles.name}>
                        {this.props.name}
                        <Text style={styles.year}>, {this.props.year}</Text>
                    </Text>
                    <Text style={styles.appelation}>{this.props.appelation}</Text>
                </View>
            </View>
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
