import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Landing, Loading } from './index';
import { Font } from 'expo';

export class AppContent extends React.Component {
  constructor() {
    super();

    this.state = {
      initialized: false,
      screen: 'landing'
    };
  }

  componentWillMount() {
    this._loadAssetsAsync();
  }

  _loadAssetsAsync = async () => {
    await Font.loadAsync({
      pacifico: require('../assets/fonts/Pacifico-Regular.ttf'),
      ralewayRegular: require('../assets/fonts/Raleway-Regular.ttf'),
      ralewaySemiBold: require('../assets/fonts/Raleway-SemiBold.ttf'),
      ralewayBold: require('../assets/fonts/Raleway-Bold.ttf'),
    });

    this.setState({ initialized: true });
  }

  currentScreen(screen) {
    switch(screen) {
      case 'loading':
        return <Loading />
      default:
        return <Landing />;
    }
  }

  render() {
    return this.state.initialized ? (
      <View style={styles.wrapper}>
        {this.currentScreen(this.state.screen)}
      </View>
    ) : null;
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
});