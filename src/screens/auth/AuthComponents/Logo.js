import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class Logo extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Image style={{width: 120, height: 120}}
          source={{uri: '/Users/danielwalker/Desktop/2018 T2/SWEN325/A2/FlatChores_react-native/src/screens/auth/Images/logo.png'}}/>   
        <Text style={styles.logoText}>Welcome to flatchores.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  logoText: {
    marginVertical: 15,
    fontSize: 18,
    color: 'rgba(255,255,255,0.7)'
  }
})
