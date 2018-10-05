import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  navigationOptions
} from 'react-native'
import { withNavigation } from 'react-navigation'
import firebase from 'firebase'
import Loader from '../components/Loader'
import Toast, { DURATION } from 'react-native-easy-toast'

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false }
  static navigationOptions = {
    header: { visible: false },
    title: 'Welcome'
  }

  onLoginPress () {
    this.setState({ error: '', loading: true })
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ error: '', loading: false })
        this.props.navigation.navigate('App')
      })
      .catch(() => {
        // Login was not successful, let's create a new account
        this.setState({ error: 'Authentication failed.', loading: false })
        this.refs.toast.show('Authentication failed.', 2000)
      })
  }

  render () {
    return (
      <View style={styles.container}>
        <Loader loading={this.state.loading} />
        <TextInput
          style={styles.inputBox}
          placeholder='Email'
          placeholderTextColor='#ffffff'
          autoCapitalize='none'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          style={styles.inputBox}
          placeholder='Password'
          placeholderTextColor='#ffffff'
          secureTextEntry
          autoCapitalize='none'
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <TouchableOpacity
          onPress={this.onLoginPress.bind(this)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>
        <Toast
          ref='toast'
          style={{ backgroundColor: '#595959' }}
          position='top'
          positionValue={220}
          fadeInDuration={50}
          fadeOutDuration={300}
          opacity={1}
          textStyle={{ color: 'white' }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 6
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

export default withNavigation(LoginForm)
