// import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { createStackNavigator } from 'react-navigation'

// create a component
class SettingsScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>SettingsScreen</Text>
        <Button
          title='NotificationScreen'
          onPress={() => this.props.navigation.navigate('Notifications')}
        />
        <Button
          title='ProfileScreen'
          onPress={() => this.props.navigation.navigate('Profile')}
        />
      </View>
    )
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  }
})

// make this component available to the app
export default SettingsScreen