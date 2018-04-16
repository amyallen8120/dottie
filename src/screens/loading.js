import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from '../components';

export class Loading extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text>Dottie Loading Page!</Text>
        </View>
        <View style={styles.card}>
          <Card />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F0',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  heading: {
    flex: 1,
    backgroundColor: '#3BD6C6',
  },
  card: {
    flex: 3,
    paddingLeft: 20,
    paddingRight: 20,
  }
});