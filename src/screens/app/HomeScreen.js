// import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'

import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

import ChoresAccordionView from './components/ChoresAccordionView'

class HomeScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ChoresAccordionView />
        <View style={styles.addChoreCont}>
          <Text style={styles.addChoreText}>
            Your flat chores will show up here
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('CreateChore')}
          >
            <Text style={styles.addChoreButton}> Click here to add one</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00c2cc'
  },
  addChoreCont: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'column'
  },
  addChoreText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16
  },
  addChoreButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700'
  }
})

// make this component available to the app
export default HomeScreen
