import React from 'react';
import { Button, Text, View ,Image} from 'react-native';
//import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import {  TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import { Icon } from 'react-native-elements';
import HomePage from './Home'
import FindPage from './Find'
import MinePage from './Mine'

//分页栏
export default TabNavigator(
  {
    Home: { screen: HomePage,
      path: '/main',
      navigationOptions:{
       tabBarLabel: '首页',
       // tabBarOnPress:(({route,index},jumpToInde)=>{
       //   console.warn(1);
       // }),
       tabBarIcon:({tintColor,focused})=>(
         <Image
            source={require("../images/home.png")}
            style={{width:25,height:25}}
         />
       )
    } },
    Find: { screen: FindPage,navigationOptions:{
       tabBarLabel: '查找',
       tabBarIcon:({tintColor,focused})=>(
         <Image
            source={require("../images/find.png")}
            style={{width:25,height:25}}
         />
       )
    }},
    Mine: { screen: MinePage,navigationOptions:{
       tabBarLabel: '个人',
       tabBarIcon:({tintColor,focused})=>(
         <Image
            source={require("../images/mine.png")}
            style={{width:25,height:25}}
         />
       )
    } },
  },
  {
    initialRouteName:"Home",
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#e91e63',
      inactiveTintColor: 'blue',
      showIcon: true,
    },
    animationEnabled: true,
    swipeEnabled: false,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Icon
          name="home"
          size={30}
          iconStyle={{
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          type="material-community"
          color={tintColor}
        />
      ),
    }
  }
);
