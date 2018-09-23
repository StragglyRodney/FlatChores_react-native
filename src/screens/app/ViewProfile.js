// import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

// create a component
class ViewProfile extends Component {
  static navigationOptions = {
    tabBarIcon: <Icon name='weekend' size={25} />,
    tabBarLabel: 'Flat',
    tabBarColor: '#3a1c31',
    shifting: true
  }
  render () {
    return (
      <View style={styles.container}>
      <Text>d</Text>
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
export default ViewProfile
