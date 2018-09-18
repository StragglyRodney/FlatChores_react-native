// import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

// create a component
class GetStartedScreen extends Component {
 
  render () {
    return (
      <View style={styles.container}>
        <Text>Get Started</Text>
        <Button
          title='LoginScreen'
          onPress={() => this.props.navigation.navigate('Login')}
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
export default GetStartedScreen
