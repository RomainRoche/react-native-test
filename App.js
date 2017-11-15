import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Let's try to make a list!</Text>
        <View style={styles.listContainer}>
          <FlatList
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
            } />          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 42,
    flex: 1,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    alignSelf: 'stretch',
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
    marginTop: 8,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  item: {
    alignSelf: 'stretch',
    backgroundColor: '#f0f0f0',
    padding: 8,
    marginTop: 8,
    fontSize: 18,
    height: 44
  }
});
