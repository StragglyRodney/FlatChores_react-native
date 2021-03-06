// import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

// create a component
class ProfileScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>ProfileScreen</Text>
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
    backgroundColor: '#00c2cc'
  }
})

// make this component available to the app
export default ProfileScreen
