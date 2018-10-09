// import liraries
import React, { Component } from "react";
import {View, StyleSheet, ScrollView, Text, TouchableOpacity, TextInputAndroidProperties, navigationOptions, TextInput} from "react-native";
import { ListItem} from "react-native-elements";
import Stepper from "react-native-js-stepper";
import Icon from "react-native-vector-icons/MaterialIcons";
import AddFlatMateScreen from "./AddFlatMateScreen";

//flatmates here are preloaded with dumby flatmates, the list "flatmates" should include those flatmates who have been added by the
//user using the addflatmatescreen, this can be done using redux to avoid using callbacks. (redux can be described as a global state... i think)

var flatmates = [{
  "name": "Amy Farha",
  "avatar_url":
    "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
  "subject": "Vice President",
  "description":"insert description here",
  "inFlat":false
},
{
  "name": "Jack Jackson",
  "avatar_url":
    "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
  "subject": "Vice Chairman",
  "description":"insert description here",
  "inFlat":false
}];

var flatName = "YOUR FLAT";

class CreateFlatScreen extends Component {
  static navigationOptions = {
    title: "CREATE A FLAT"
  };

  constructor(props) {
    super(props);
    this.state = {
      page: 1 //used as a conditional within render to decide which view to return
    };
    this.loadData();
  }

  loadData() {
    //should be rewritten for firebase integration (load currently added flatmates)
  }

  render() {
    //can return one of two views depending on what stage there at in the create flat process
    if (this.state.page == 1) {
      return this.getViewOne();
    } else {
      return this.getViewTwo();
    }
  }

  //FIRST STEP (ADDING FLATMATES)
  getViewOne() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>My Flatmates</Text>
        </View>

        <View style={styles.iconView}>
          <Icon raised name="add-circle" size={50} type="font-awesome" color="#ffa18a"
            onPress={() => this.props.navigation.navigate("AddFlatMate")}
          />
        </View>

        <View style={styles.break} />

        <ScrollView>
          {flatmates.map((flatmate, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: flatmate.avatar_url } }}
              rightIcon={<Icon raised name="arrow-forward" size={30} />}
              title={flatmate.name}
              subtitle={flatmate.subtitle}
              onPress={() =>
                this.props.navigation.navigate("ViewProfile", { flatmate })
              }
            />
          ))}
        </ScrollView>

        <View style={styles.stepper}>
          <Stepper
            validation={false}
            textButtonsStyle={styles.stepperTextStyle}
            activeDotStyle={styles.activeDot}
            inactiveDotStyle={styles.inactiveDot}
            showTopStepper={false}
            showBottomStepper={true}
            backButtonTitle="BACK"
            onPressNext={() => {this.setState({page: 2});}}
            nextButtonTitle="NEXT"
          >
            <View />
            <View />
          </Stepper>
        </View>
      </View>
    );
  }

  //Second step for creating a flat name
  getViewTwo() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText1}>Create a Flat name</Text>
        </View>

          <TextInput
            style={styles.inputBox}
            placeholder="Flat nickname"
            placeholderTextColor="#ffffff"
          />

        <View style={styles.stepper}>
          <Stepper
            initialPage={1}
            validation={false}
            activeDotStyle={styles.activeDot}
            inactiveDotStyle={styles.inactiveDot}
            showTopStepper={false}
            showBottomStepper={true}
            textButtonsStyle={styles.stepperTextStyle}
            backButtonTitle="BACK"
            onPressNext={() =>
              this.props.navigation.goBack(null)}
            onPressBack={() => this.setState({ page: 1 })}
            nextButtonTitle="FINISH"
          >
            <View />
            <View />
          </Stepper>
        </View>
      </View>
    );
  }

  createFlat() {
    //CREATE A FLAT AND QUERY THE DATABASE
    //NAVIGATE TO CHORES PAGE
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  },
  titleText: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 25,
    fontFamily: "Georgia",
    backgroundColor: "#00c2cc",
    color: "#ffffff",
    paddingTop: 15,
    paddingLeft: 90
  },
  titleText1: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    fontFamily: "Georgia",
    backgroundColor: "#00c2cc",
    color: "#ffffff",
    paddingTop: 15
  },

  title: {
    backgroundColor: "#00c2cc",
    paddingTop: 20,
    paddingBottom: 20
  },
  iconView: {
    position: "absolute",
    top: 65,
    left: 25,
    borderRadius: 60,
    backgroundColor:"#ffd0c4"
  },
  stepper: {
    flex: 1,
    bottom: 0,
    padding: 0,
    backgroundColor: "#ffffff",
    color:"#00c2cc"
  },
  break: {
    height: 30
  },
  stepperTextStyle:{
    color:"#00c2cc"
  },
  activeDot: {
    backgroundColor: "#00c2cc"
  },
  inactiveDot: {
    backgroundColor: "#ffa18a"
  },
  inputBox: {
    margin: 15,
    borderRadius:10,
    height: 50,
    borderColor: '#ffa18a',
    borderWidth: 1
  }
});

export default CreateFlatScreen;
