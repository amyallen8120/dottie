import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Heading extends React.Component {
  render() {
    return (
      <View style={this.props.shadow ? [styles.component, styles.shadow] : styles.component}>
        <Text style={[styles.headerText, styles.header1]}>Dottie</Text>
        <Text style={[styles.headerText, styles.header2]}>Your drink of the day based on current weather conditions</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    flex: 3,
    backgroundColor: '#3BD6C6',
    paddingVertical: 30,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
  },
  headerText: {
    textAlign: 'center',
    color: '#fff',
  },
  header1: {
    fontSize: 46,
    paddingBottom: 10,
    fontFamily: 'pacifico',
  },
  header2: {
    fontSize: 18,
    fontFamily: 'ralewayRegular',
  },
});