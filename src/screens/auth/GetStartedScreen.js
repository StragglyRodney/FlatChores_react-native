// import liraries
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  navigationOptions
} from 'react-native'
import Gif from '../../components/Gif'

// create a component
class GetStartedScreen extends Component {
  static navigationOptions = { header: null }
  render () {
    return (
      <View style={styles.container}>
        <Gif />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
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
  },
  button: {
    width: 300,
    backgroundColor: '#ffa18a',
    borderRadius: 10,
    paddingVertical: 12,
    marginVertical: 6
  },
  buttonText: {
    width: 300,
    fontSize: 20,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  }
})

// make this component available to the app
export default GetStartedScreen
