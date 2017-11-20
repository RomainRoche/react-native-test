import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class WineScreen extends React.Component {

    get wine() {
        return this.props.navigation.state.params.wine;
    }

    render() {
        return(
            <View style={styles.view}>
                <Image style={styles.image} source={{uri: this.wine.imageUrl}}/>
                <View style={styles.content}>
                    <Text style={styles.name}>
                        {this.wine.name}
                        <Text style={styles.year}>, {this.wine.year}</Text>
                    </Text>
                    <Text style={styles.appelation}>{this.wine.appelation}</Text>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'white',
    },
    image: {
        flex: 1
    },
    content: {
        flex: 2,
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
})
