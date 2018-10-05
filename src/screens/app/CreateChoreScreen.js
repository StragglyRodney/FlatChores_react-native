import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native'
import firebase from 'react-native-firebase'

class CreateChoreScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      choreTitle: '',
      choreDescription: '',
      choreCompleted: false,
      choreDueDate: new Date() + 7
    }
  }

  async createChore (choreTitle, choreDescription) {
    const doc = await firebase
      .firestore()
      .collection('flats')
      .doc('flat1')
      .collection('chores')
      .doc(choreTitle)
      .get()

    if (doc.exists) {
      return doc.data()
    } else {
      const defaultDoc = {
        choreTitle: choreTitle,
        choreDescription: choreDescription
      }
      await firebase
        .firestore()
        .collection('flats')
        .doc('flat1')
        .collection('chores')
        .doc(choreTitle)
        .set(defaultDoc)

      return doc
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
          multiline
          style={styles.descriptionBox}
          placeholder='Chore Description'
          placeholderTextColor='#ffffff'
          value={this.state.choreDescription}
          onChangeText={choreDescription => this.setState({ choreDescription })}
        />

        <TouchableOpacity
          onPress={() => {
            this.createChore(
              this.state.choreTitle,
              this.state.choreDescription
            ).then(() => {
              this.props.navigation.state.params.onNavigateBack()
              this.props.navigation.goBack()
            })
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{'Create Chore'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    alignItems: 'center',
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

  descriptionBox: {
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    alignItems: 'stretch',
    color: '#ffffff',
    marginVertical: 6,
    flex: 1
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
