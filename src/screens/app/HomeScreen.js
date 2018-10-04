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

import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/MaterialIcons'
import ChoresAccordionView from '../../components/ChoresAccordionView'

class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = { accordion_chores: [] }
  }

  handleOnNavigateBack = () => {
    this.refreshChores()
  }

  componentWillMount () {
    this.refreshChores()
  }

  refreshChores () {
    firebase
      .firestore()
      .collection('flats')
      .doc('flat1')
      .collection('chores')
      .get()
      .then(snapshot => {
        // reset the chores
        this.setState(() => {
          return { accordion_chores: [] }
        })

        // pull all the chores from firestore
        chores = []
        snapshot.forEach(chore => {
          chores.push({
            title: chore.get('choreTitle'),
            content: chore.get('choreDescription')
          })
        })

        // set state variable to these chores
        this.setState(() => {
          return { accordion_chores: chores }
        })
      })
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <ChoresAccordionView sections={this.state.accordion_chores} />
        <View style={styles.addChoreCont}>
          <Icon
            raised
            name='add-circle'
            size={40}
            type='font-awesome'
            color='#ffa18a'
            onPress={() =>
              this.props.navigation.navigate('CreateChore', {
                onNavigateBack: this.handleOnNavigateBack
              })}
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
