import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Landing } from './index';

export class AppContent extends React.Component {
  constructor() {
    super();

    this.state = {
      screen: 'landing'
    };
  }

  currentScreen(screen) {
    switch(screen) {
      default:
        return <Landing />;
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        {this.currentScreen(this.state.screen)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});