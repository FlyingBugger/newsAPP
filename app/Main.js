/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import  Home  from './Home';
import  Find  from './Find';

import  Message  from './Message';
import  Mine  from './Mine';

import {TabNavigator} from 'react-navigation'
const mainPage=TabNavigator({
  Home:{
    screen:Home
  },
  Find:{
    screen:Find
  },
  Message:{
    screen:Message
  }
})

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
            Main
        </Text>
      </View>
    );
  }
}
