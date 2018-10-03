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
import LeaderBoardScreen from './src/screens/app/LeaderBoardScreen'
import CreateFlatScreen from './src/screens/app/CreateFlatScreen'
import JoinFlatScreen from './src/screens/app/JoinFlatScreen'
import ViewProfile from './src/screens/app/ViewProfile'
import AddFlatMateScreen from './src/screens/app/AddFlatMateScreen'
import { createSwitchNavigator } from 'react-navigation'
import { AuthStack, AppTab } from './src/lib/Navigators'
import { firebaseService } from './src/lib/FireBaseService'
import firebase from 'firebase/app'

firebase.initializeApp({
  apiKey: 'AIzaSyDhr9S4S4Gshpbb8WsRACyHimXOr0iczY8',
  authDomain: 'flatchores-react-native.firebaseapp.com',
  databaseURL: 'https://flatchores-react-native.firebaseio.com',
  projectId: 'flatchores-react-native',
  storageBucket: 'flatchores-react-native.appspot.com',
  messagingSenderId: '415430905460'
})

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


export default createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppTab
  },
  {
    initialRouteName: 'Auth'
  }
)
