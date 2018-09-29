import React, { Component } from 'react'
import { createSwitchNavigator } from 'react-navigation'
import { AuthStack, AppTab } from './src/lib/Navigators'
import { firebaseService } from './src/lib/FireBaseService'
import firebase from 'firebase/app'

firebaseService.load('test')

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
