/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation'

mjj
import Icon from '@expo/vector-icons/FontAwesome';
import {AddButton} from "./src/Components/AddButton";
import HomeScreen from './src/screens/app/HomeScreen'
import FlatScreen from './src/screens/app/FlatScreen'
import SettingsScreen from './src/screens/app/SettingsScreen'
import GetStartedScreen from './src/screens/auth/GetStartedScreen'
import LoginScreen from './src/screens/auth/LoginScreen'
import CreateChoreScreen from './src/screens/app/CreateChoreScreen'
import NotificationsScreen from './src/screens/app/NotificationsScreen'
import ProfileScreen from './src/screens/app/ProfileScreen'

/* Define the different navigation stacks */
const AppTab = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="Home"
                color={tintColor}
                size={24}
            />
        )
    })
},
Flat: {
    screen: FlatScreen,
    navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="Flat"
                color={tintColor}
                size={24}
            />
        )
    })
},
Settings: {
    screen: SettingsScreen,
    navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="Settings"
                color={tintColor}
                size={24}
            />
        )
    })
},
tabBarOptions: {
    showLabel: false,
    activeTintColor: '#F8F8F8',
    inactiveTintColor: '#586589',
    style: {
        backgroundColor: '#171F33'
    },
    tabStyle: {}
}
})

const HomeStack = createStackNavigator({
  CreateChore: CreateChoreScreen
})

const AuthStack = createStackNavigator({
  GetStarted: GetStartedScreen,
  Login: LoginScreen
})

export default createSwitchNavigator(
  {
    Auth: AuthStack,
    HomeNav: HomeStack,
    Notifications: NotificationsScreen,
    Profile: ProfileScreen,
    App: AppTab
  },
  {
    initialRouteName: 'Auth'
  }
)
