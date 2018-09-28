// import liraries
import React, { Component } from "react";
import {View, StyleSheet, ScrollView, Text, TouchableOpacity, TextInputAndroidProperties, navigationOptions, TextInput} from "react-native";
import { ListItem, Button } from "react-native-elements";
import Stepper from "react-native-js-stepper";
import Icon from "react-native-vector-icons/MaterialIcons";
import AddFlatMateScreen from "./AddFlatMateScreen";


//flatmates here are preloaded with dumby flatmates, the list "flatmates" should include those flatmates who have been added by the 
//user using the addflatmatescreen, this can be done using redux to avoid using callbacks. (redux can be described as a global state... i think)
const flatmates = [
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subject: "Vice President",
    description:"Hi Im Amy Farha and I like to party hardy"
  },
  {
    name: "Jack Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subject: "Vice Chairman",
    description: "Hi Im Jack Jackosn and I like to party hardy"
  }
];

class CreateFlatScreen extends Component {
  static navigationOptions = {
    title: "CREATE A FLAT"
  };

  constructor(props) {
    super(props);
    this.state = {
      //used as a conditional within render to decide which view to return
      page: 1
    };
  }

  render() {
    //can return one of two views depedning on what stage there at in the create flat process
    //to be implemented ---> more conditionals to ensure the user has entered a valid flat name!! important!
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
          <Icon
            raised
            name="add-circle"
            size={50}
            type="font-awesome"
            color="#ffa18a"
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
              onPress={() => this.props.navigation.navigate("ViewProfile", {flatmate})}
            />
          ))}
        </ScrollView>

        <View style={styles.stepper}>
          <Stepper
            validation={false}
            activeDotStyle={styles.activeDot}
            inactiveDotStyle={styles.inactiveDot}
            showTopStepper={false}
            showBottomStepper={true}
            backButtonTitle="BACK"
            onPressNext={() => {
              this.setState({
                page: 2
              });
            }}
            nextButtonTitle="NEXT"
            activeStepStyle={styles.activeStep}
            inactiveStepStyle={styles.inactiveStep}
            activeStepTitleStyle={styles.activeStepTitle}
            inactiveStepTitleStyle={styles.inactiveStepTitle}
            activeStepNumberStyle={styles.activeStepNumber}
            inactiveStepNumberStyle={styles.inactiveStepNumber}
          >
            <View />
            <View />
          </Stepper>
        </View>
      </View>
    );
  }


  //VIEW FOR STEP NUMBER TWO (CREATE A FLAT NAME)
  getViewTwo() {
    return (
      <View style={styles.container}>

        <View style={styles.title}>
          <Text style={styles.titleText1}>Create a Flat name</Text>
        </View>

        <View style={styles.flatName}>

          <TextInput
            style={styles.inputBox}
            placeholder="Flat nickname"
            placeholderTextColor="#ffffff"
          />

        </View>

        <View style={styles.stepper}>
          <Stepper
            initialPage={1}
            validation={false}
            activeDotStyle={styles.activeDot}
            inactiveDotStyle={styles.inactiveDot}
            showTopStepper={false}
            showBottomStepper={true}
            backButtonTitle="BACK"
            onPressNext={() => {
              this.createFlat
            }}
            onPressBack={() => this.setState({ page: 1 })}
            nextButtonTitle="FINISH"
            activeStepStyle={styles.activeStep}
            inactiveStepStyle={styles.inactiveStep}
            activeStepTitleStyle={styles.activeStepTitle}
            inactiveStepTitleStyle={styles.inactiveStepTitle}
            activeStepNumberStyle={styles.activeStepNumber}
            inactiveStepNumberStyle={styles.inactiveStepNumber}
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
    this.props.navigation.navigate('HomeNav')
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
    left: 25
  },
  scrollView: {
    bottom: 0,
    height: 450
  },
  stepper: {
    flex: 1,
    bottom: 0,
    padding: 0,
    backgroundColor: "#ffffff"
  },
  break: {
    height: 30
  },
  activeDot: {
    backgroundColor: "grey"
  },
  inactiveDot: {
    backgroundColor: "#ededed"
  },
  activeStep: {
    backgroundColor: "grey"
  },
  inactiveStep: {
    backgroundColor: "#ededed"
  },
  activeStepTitle: {
    fontWeight: "bold"
  },
  inactiveStepTitle: {
    fontWeight: "normal"
  },
  activeStepNumber: {
    color: "white"
  },
  inactiveStepNumber: {
    color: "black"
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

  button: {
    width: 300,
    backgroundColor: "#ffa18a",
    borderRadius: 10,
    paddingVertical: 12,
    marginVertical: 6
  },
  flatName: {
    alignItems: "center"
  }
});

export default CreateFlatScreen;
