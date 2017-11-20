import React from 'react';
import { View, Text } from 'react-native';

export default class WineScreen extends React.Component {

    get wine() {
        return this.props.navigation.state.params.wine;
    }

    render() {
        return(
            <View>
                <Text>{this.wine.name}</Text>
            </View>
        );
    }

}
