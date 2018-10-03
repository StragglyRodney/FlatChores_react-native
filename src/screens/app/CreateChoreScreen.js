import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button
} from 'react-native'
import { firebaseService } from '../../lib/FireBaseService'

class CreateChoreScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      choreTitle: '',
      choreDescription: '',
      choreDueDate: new Date() + 7
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          placeholder='Chore Title'
          placeholderTextColor='#ffffff'
          value={this.state.choreTitle}
          onChangeText={choreTitle => this.setState({ choreTitle })}
        />
        <TextInput
          style={styles.inputBox}
          placeholder='Chore Description'
          placeholderTextColor='#ffffff'
          value={this.state.choreDescription}
          onChangeText={choreDescription => this.setState({ choreDescription })}
        />

        <TouchableOpacity
          onPress={() => {
            this.createChore()
            this.props.navigation.goBack()
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Create Chore</Text>
        </TouchableOpacity>
      </View>
    )
  }

  createChore () {
    firebaseService.createChore(
      this.state.choreTitle,
      this.state.choreDescription
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 30,
    // justifyContent: 'center',
    backgroundColor: '#00c2cc'
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

export default CreateChoreScreen
