// import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

// create a component
class NotificationsScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>NotificationsScreen</Text>
        <Button
          title='Go Back'
          onPress={() => this.props.navigation.navigate('Settings')}
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
export default NotificationsScreen
