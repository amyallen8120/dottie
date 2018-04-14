import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Heading extends React.Component {
  render() {
    return (
      <View style={styles.component}>
        <Text>Heading Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});