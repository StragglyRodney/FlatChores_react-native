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
import {
  createMaterialBottomTabNavigator
} from 'react-navigation-material-bottom-tabs'

import Icon from 'react-native-vector-icons/MaterialIcons'
import HomeScreen from './src/screens/app/HomeScreen'
import FlatScreen from './src/screens/app/FlatScreen'
import SettingsScreen from './src/screens/app/SettingsScreen'
import GetStartedScreen from './src/screens/auth/GetStartedScreen'
import LoginScreen from './src/screens/auth/LoginScreen'
import SignupScreen from './src/screens/auth/SignupScreen'
import CreateChoreScreen from './src/screens/app/CreateChoreScreen'
import NotificationsScreen from './src/screens/app/NotificationsScreen'
import ProfileScreen from './src/screens/app/ProfileScreen'

/* Define the startup (authentication) stack */
const AuthStack = createStackNavigator({
  GetStarted: GetStartedScreen,
  Login: LoginScreen,
  Signup: SignupScreen
})

/* Define the three stacks in the tab navigator */
const HomeStack = createStackNavigator({
  HomeNav: HomeScreen,
  CreateChore: CreateChoreScreen
})

const FlatStack = createStackNavigator({
  Flat: FlatScreen
})

const SettingsStack = createStackNavigator({
  SettingsNav: SettingsScreen,
  Notifications: NotificationsScreen,
  Profile: ProfileScreen
})

/* Hides the tabBar if not on the main tab screen.
Applied to all the stacks within the tab navigator */
const hideTabBar = ({ navigation }) => {
  let tabBarVisible = true
  if (navigation.state.index > 0) tabBarVisible = false
  return { tabBarVisible }
}
HomeStack.navigationOptions = hideTabBar
FlatStack.navigationOptions = hideTabBar
SettingsStack.navigationOptions = hideTabBar

/* Defines the tab navigator and the options for each tab */
const AppTab = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: <Icon name='people' size={25} />,
        tabBarLabel: 'Home',
        tabBarColor: '#1c313a',
        shifting: true
      }
    },
    Flat: {
      screen: FlatStack,
      navigationOptions: {
        tabBarIcon: <Icon name='weekend' size={25} />,
        tabBarLabel: 'Flat',
        tabBarColor: '#3a1c31',
        shifting: true
      }
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: {
        tabBarIcon: <Icon name='account-circle' size={25} />,
        tabBarLabel: 'Settings',
        tabBarColor: '#313a1c',
        shifting: true
      }
    }
  },
  {
    initialRouteName: 'Home',
    barStyle: { backgroundColor: '#1c313a' }
  }
)

export default createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppTab
  },
  {
    initialRouteName: 'Auth'
  }
)
