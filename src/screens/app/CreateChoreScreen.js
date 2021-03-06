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
import Loader from '../../components/Loader'
import Toast, { DURATION } from 'react-native-easy-toast'

class CreateChoreScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      choreTitle: '',
      choreDescription: '',
      choreDueDate: new Date() + 7,
      error: '',
      loading: false
    }
  }

  async createChore (choreTitle, choreDescription) {
    this.setState({ error: '', loading: true })
    chore = await firebase
      .firestore()
      .collection('flats')
      .doc('flat1')
      .collection('chores')
      .doc(choreTitle)

    const doc = await chore.get()

    if (doc.exists) {
      console.log('Chore already exists')
      throw 'Chore already exists'
    } else {
      const defaultDoc = {
        choreTitle: choreTitle,
        choreDescription: choreDescription
      }
      chore.set(defaultDoc)
      return doc
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Loader loading={this.state.loading} />
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
            this.createChore(this.state.choreTitle, this.state.choreDescription)
              .then(() => {
                this.setState({ error: '', loading: false })
                this.props.navigation.state.params.onNavigateBack()
                this.props.navigation.goBack()
              })
              .catch(error => {
                console.log('Did get caught')
                this.setState({
                  error: error,
                  loading: false
                })
                this.refs.toast.show(error, 2000)
              })
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{'Create Chore'}</Text>
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
