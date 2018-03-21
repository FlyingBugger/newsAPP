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
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
export default class Home extends Component {

  render() {
    const { navigate }=this.props.navigation;
    alert(1)
    console.log(this.props.navigation)
    return (
      <View style={styles.container}>
        <View>
        <TouchableOpacity
             onPress={()=>navigate("detail",{article:"king"})}
             title="new"
        >
        <Image
           source={require("../images/home.png")}
           style={{width:25,height:25}}
        />
        </TouchableOpacity>
        </View>

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
