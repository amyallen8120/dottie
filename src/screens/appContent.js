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
    return this.currentScreen(this.state.screen);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});