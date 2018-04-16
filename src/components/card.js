import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Card extends React.Component {
  render() {
    return (
      <View style={styles.component}>
        <Text>Card Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    position: 'absolute',
    flex: 1,
    backgroundColor: '#fff',
    elevation: 5,
    alignSelf: 'stretch',
    top: -20,
    left: 20,
    right: 20,
    bottom: 20,
  },
});