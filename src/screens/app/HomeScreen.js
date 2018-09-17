// import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import { createStackNavigator } from 'react-navigation'

// create a component
class HomeScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <Button
          title='CreateChoreScreen'
          onPress={() => this.props.navigation.navigate('CreateChore')}
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
export default HomeScreen
