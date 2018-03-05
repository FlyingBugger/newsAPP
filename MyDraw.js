import React from 'react';
import { Button, Text, View ,Image} from 'react-native';
//import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import {  DrawerNavigator, DrawerItems } from 'react-navigation'; // Version can be specified in package.json
import { Icon } from 'react-native-elements';
import Home from './app/Home'
import Find from './app/Find'
import Main from './app/Main'
import Mine from './app/Mine'

 const MyDraw = DrawerNavigator(
  {
    MyHome:{
      screen:Home
    },
    MyFind:{
      screen:Find
    },
    MyFind:{
      screen:Main
    }
 },{
   drawerPosition:"left",
    contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
    contentOptions:{
      initialRouteName:MyHome
    }
 }
)

const CustomDrawerContentComponent=(props)=>(

    <View>
        <Text>1</Text>
    </View>

)
 module.exports=MyDraw;
