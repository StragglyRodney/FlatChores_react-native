// import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Button } from 'react-native-elements';
// create a component
class FlatScreen extends Component {
  static navigationOptions = {
    tabBarIcon: <Icon name="weekend" size={25} />,
    tabBarLabel: "Flat",
    tabBarColor: "#3a1c31",
    shifting: true
  };
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate("CreateFlat")}
          title="Create a Flat!"
          color="#ffffff"
          accessibilityLabel="Create chores and put your flatmates to work!"
          titleStyle={{ fontWeight: "700" }}
          buttonStyle={styles.buttonStyle}
        />
        <Button
          buttonStyle={styles.buttonStyle}
          onPress={() => this.props.navigation.navigate("JoinFlat")}
          title="Join a Flat!"
          color="#ffffff"
          accessibilityLabel="Join an existing flat using the flatID!"
          itleStyle={{ fontWeight: "700" }}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00c2cc"
  },
  buttonStyle: {
    backgroundColor: "#cc3600",
    width: 300,
    height: 45,
    margin: 10,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  }
});

// make this component available to the app
export default FlatScreen;
