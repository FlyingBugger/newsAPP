import React from 'react';
import { Button, Text, View ,Image} from 'react-native';
//import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import {  TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json

import Home from './app/Home'
import Find from './app/Find'
import Main from './app/Main'
import Mine from './app/Mine'

export default TabNavigator(
  {
    Home: { screen: Home,navigationOptions:{
       tabBarLabel: '首页',
       tabBarIcon:({tintColor,focused})=>{
         <Image
            source={require("./images/home.png")}
         />
       }
    } },
    Find: { screen: Find ,Home,navigationOptions:{
       tabBarLabel: '首页',
       tabBarIcon:({tintColor,focused})=>{
         <Image
            source={require("./images/home.png")}
         />
       }
    }},
    Main: { screen: Main,Home,navigationOptions:{
       tabBarLabel: '首页',
       tabBarIcon:({tintColor,focused})=>{
         <Image
            source={require("./images/home.png")}
         />
       }
    } },
    Mine: { screen: Mine,Home,navigationOptions:{
       tabBarLabel: '首页',
       tabBarIcon:({tintColor,focused})=>{
         <Image
            source={require("./images/home.png")}
            style={{width:40,height:40}}
         />
       }
    } },
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon:"true",
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);
