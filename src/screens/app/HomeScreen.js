// import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'

import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

// create a component
class HomeScreen extends Component {

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.addChoreCont}>
          <Text style={styles.addChoreText}>Your flat chores will show up here</Text>
          <Icon
            raised
            name='add-circle'
            size={40}
            type='font-awesome'
            color='#ffa18a'
            onPress={() => this.props.navigation.navigate('CreateChore')} />
        </View>
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
  },
  addChoreCont: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    flexDirection: 'column'
  },
  addChoreText: {
    color: '#ffffff',
    fontSize: 16,
    paddingBottom: 15
  },

})

// make this component available to the app
export default HomeScreen
