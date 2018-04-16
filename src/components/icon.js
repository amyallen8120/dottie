import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Landing } from './index';
import {
  cheers
} from '../assets/icons';

export class Icon extends React.Component {
  returnIcon() {
    switch(this.props.name) {
      case 'cheers':
        return cheers();
      default:
        return null;
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        {this.returnIcon(this.props.name) || null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});