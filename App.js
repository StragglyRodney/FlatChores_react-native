import React, { Component } from 'react'
import { createSwitchNavigator } from 'react-navigation'
import { AuthStack, AppTab } from './src/lib/Navigators'
import { firebase, firestore } from 'firebase'
import { firebaseService } from './src/lib/FireBaseService'

export default createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppTab
  },
  {
    initialRouteName: 'Auth'
  }
)
