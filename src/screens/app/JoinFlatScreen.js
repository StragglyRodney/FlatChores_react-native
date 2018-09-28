import React, { Component } from "react";
import {View, StyleSheet, ScrollView, Text, TouchableOpacity, TextInputAndroidProperties, navigationOptions, TextInput} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

// create a component
class JoinFlatScreen extends Component {
  static navigationOptions = {
    tabBarIcon: <Icon name="weekend" size={25} />,
    tabBarLabel: "Flat",
    tabBarColor: "#3a1c31",
    shifting: true
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText1}>Join a flat</Text>
        </View>

        <View style={styles.flatName}>
          <TextInput
            style={styles.inputBox}
            placeholder="FlatID"
            placeholderTextColor="#ffffff"
          />
        </View>
      </View>
    );
  }
}


// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
  titleText1: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    fontFamily: "Georgia",
    backgroundColor: "#00c2cc",
    color: "#ffffff",
  },

  title: {
    backgroundColor: "#00c2cc",
    paddingTop: 20,
    paddingBottom: 20
  },
  inputBox: {
    textAlign: "center",
    width: 300,
    backgroundColor: "grey",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 6
  },
  flatName: {
    alignItems: "center"
  }
});

// make this component available to the app
export default JoinFlatScreen;
