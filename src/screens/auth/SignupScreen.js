// import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import SignupForm from './AuthComponents/SignupForm'
// create a component
class SignupScreen extends Component {


  render() {
    return (
      <View style={styles.container}>
        <SignupForm type="Signup" />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already Have an account?</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.signupButton}> Log in!</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00c2cc',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  signupText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700'
  }
})

// make this component available to the app
export default SignupScreen
