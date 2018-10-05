import 'babel-polyfill'
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

import { AuthStack, AppTab } from './src/lib/Navigators'
import firebase from 'firebase/app'

firebase.initializeApp({
  apiKey: 'AIzaSyDhr9S4S4Gshpbb8WsRACyHimXOr0iczY8',
  authDomain: 'flatchores-react-native.firebaseapp.com',
  databaseURL: 'https://flatchores-react-native.firebaseio.com',
  projectId: 'flatchores-react-native',
  storageBucket: 'flatchores-react-native.appspot.com',
  messagingSenderId: '415430905460'
})

export default createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppTab
  },
  {
    initialRouteName: 'Auth'
  }
)
