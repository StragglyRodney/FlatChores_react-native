// import liraries
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

import ChoresAccordionView from './components/ChoresAccordionView'

class HomeScreen extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <ChoresAccordionView />
        <View style={styles.addChoreCont}>
          <Text style={styles.addChoreText}>
            Your flat chores will show up here
          </Text>
          <Icon
            raised
            name='add-circle'
            size={40}
            type='font-awesome'
            color='#ffa18a'
            onPress={() => this.props.navigation.navigate('CreateChore')}
          />
        </View>
      </ScrollView>
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
    paddingVertical: 24,
    flexDirection: 'column'
  },
  addChoreText: {
    color: '#ffffff',
    fontSize: 16,
    paddingBottom: 15
  }
})

// make this component available to the app
export default HomeScreen
