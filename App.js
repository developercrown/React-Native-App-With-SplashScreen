import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <StatusBar hidden={true} />  
        <Text>Demo Splash Screen DevCrown Software</Text>
      </View>
    );
  }
}
