import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Heading, Icon } from '../components';

export class Landing extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Heading />
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Icon name={'cheers'} />
          </View>
          <View style={styles.ellipseContainer}>
            <View style={styles.ellipse}></View>
            <View style={styles.ellipse}></View>
            <View style={styles.ellipse}></View>
          </View>
          <Text>&copy; Copyright YEAR</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3BD6C6',
  },
  content: {
    flex: 6,
    alignItems: 'center',
  },
  imageContainer: {
  },
  ellipseContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ellipse: {
    backgroundColor: '#fff',
    height: 10,
    width: 10,
    borderRadius: 10,
    margin: 8,
  }
});