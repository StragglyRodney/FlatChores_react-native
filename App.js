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
  Home: HomeScreen,
  Flat: FlatScreen,
  Settings: SettingsScreen
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
