import React, { Component } from 'react'
import { createSwitchNavigator } from 'react-navigation'
import { AuthStack, AppTab } from './src/lib/Navigators'

export default createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppTab
  },
  {
    initialRouteName: 'Auth'
  }
)
