// import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Leaderboard from 'react-native-leaderboard';
import PropTypes from 'prop-types'; // ES6



// create a component
class LeaderBoardScreen extends Component {
  static navigationOptions = {
    title: 'LeaderBoard'
  }

  state = {
    data: [
      { userName: 'Joe', highScore: 52 },
      { userName: 'Jenny', highScore: 120 },
      { userName: 'Dan', highScore: 1220 },
      { userName: 'Andy', highScore: 10 },
      { userName: 'Rodney', highScore: 69 },
      //...
    ] //can also be an object of objects!: data: {a:{}, b:{}}
  }

  render() {
    return (
      <Leaderboard
        data={this.state.data}
        sortBy='highScore'
        labelBy='userName' />
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
  }
})

// make this component available to the app
export default LeaderBoardScreen
