import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
var logo = require('../images/logo.png');

export default class Splasscreen extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      //navigation chuyen qua login
      this.props.navigation.navigate('OnboardingScreen');
      //5s chuyen qua login
    }, 2000);
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 50 }}>
        <Image source={logo} style={{ height: 200, width: 300 }}></Image>
        <Text style={{ fontSize: 20, textAlign: 'center', color: '#707070', marginTop: 50 }}>
          Welcome
            </Text>
        <Text style={{ fontSize: 20, textAlign: 'center', color: '#707070' }}>
          Thắng Lý versity jacket
            </Text>
      </View>
    );
  }
}