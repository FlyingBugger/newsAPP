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

export default class details extends Component {
  static navigationOptions=({navigation,navigationOptions})=>{
    const {params}=navigation.state
    return {
      title:params ?params.article:"文章详情",
      headerTitleStyle:{

            alignItems:"center",
            color:"red"
        },

    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
            details
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
