// import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

// create a component
class FlatScreen extends Component {
  static navigationOptions = {
    title: 'Flat'
  }
  render () {
    return (
      <View style={styles.container}>
        <Text>FlatScreen</Text>
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
export default FlatScreen
