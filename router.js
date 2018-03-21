import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
//import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import {  StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { Icon } from 'react-native-elements';

import MainPage from './app/Main'
import detailsPage from './app/details'


const HeaderRightComponent = () => (
        <Image
          source={require("./images/qr.png")}
          style={{width:25,height:25,marginRight:10}}
        />
);
const HeaderLeftComponent = () => (
      <Image
      source={require("./images/all.png")}
      style={{width:25,height:25,marginLeft:10}}
      />
);

const routers= StackNavigator(
  {
    Main:{
      screen:MainPage,
      navigationOptions:{
        headerTitle:"首页",
        headerTitleStyle:{
              alignSelf:'center',
              alignItems:"center",
              color:"red"
          },
      }
    },
    detail:{
      screen:detailsPage,
    }
  },{
    navigationOptions:{
      initialRouteName:"Main",
      headerTitleStyle:{
            alignSelf:'center',
        },
      headerRight:<HeaderRightComponent />,
      headerLeft:<HeaderLeftComponent/>,
    }
  }
);





module.exports = routers;
