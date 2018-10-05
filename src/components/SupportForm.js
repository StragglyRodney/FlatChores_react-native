import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { withNavigation } from 'react-navigation'
import firebase from 'firebase'
import Loader from './Loader'
import Toast, { DURATION } from 'react-native-easy-toast'
import email from 'react-native-email'


class SupportForm extends Component {

  state = { email: '', password: '', error: '', loading: false, problem: '', description: '' }
  static navigationOptions = {
    header: { visible: false },
    title: 'Welcome'
  }

  contactUs() {
    const { problem, description } = this.state

    const to = ['support@flatchores.com'] // string or array of email addresses
    email(to, {
      subject: problem,
      body: description
    }).catch(console.error)
  }

  render() {
    return (
      <View style={styles.container}>
        <Loader loading={this.state.loading} />
        <TextInput id="useremail"
          style={styles.inputBox}
          placeholder='Your Email'
          placeholderTextColor='#000000'
          autoCapitalize='none'
        />
        <TextInput id="username"
          style={styles.inputBox}
          placeholder='Your Name'
          placeholderTextColor='#000000'
          secureTextEntry
          autoCapitalize='none'
        />
        <TextInput id="problem"
          style={styles.inputBox}
          placeholder='Describe the problem in a few words'
          placeholderTextColor='#000000'
          value={this.state.problem}
          onChangeText={problem => this.setState({ problem })}
        />
        <TextInput id="description"
          style={styles.inputBox}
          placeholder='Describe the problem in more detail'
          placeholderTextColor='#000000'
          onChangeText={description => this.setState({ description })}

        />
        <TouchableOpacity
          onPress={this.contactUs.bind(this)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Send Email</Text>
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
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 6
  },

  button: {
    width: 300,
    backgroundColor: '#26c6da',
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

export default withNavigation(SupportForm)
