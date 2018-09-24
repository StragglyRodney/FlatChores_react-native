// import liraries
import React, { Component } from "react";
import {View, StyleSheet, ScrollView, Text, TouchableOpacity, navigationOptions} from "react-native";
import { ListItem, Button } from "react-native-elements";
import Stepper from "react-native-js-stepper";
import Icon from "react-native-vector-icons/MaterialIcons";
import AddFlatMateScreen from "./AddFlatMateScreen";

const flatmates = [ {
  name: "Amy Farha",
  avatar_url:
    "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
  subject: "Vice President"
},
{
  name: "Jack Jackson",
  avatar_url:
    "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
  subject: "Vice Chairman"
}]; //the flatmates that the user has added to their flat

class CreateFlatScreen extends Component {
  static navigationOptions = {
    title: "CREATE A FLAT"
  };

  constructor(props) {
    super(props);
  }

  onClickNext() {
    const { steps, currentStep } = this.state;
    this.setState({
      currentStep: currentStep + 1
    });
  }

  render() {
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
        <View style={styles.break}>
          
        </View>
        <ScrollView>
          {flatmates.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: l.avatar_url } }}
              rightIcon={<Icon
                raised
                name="arrow-forward"
                size={30}
              />}
              title={l.name}
              subtitle={l.subtitle}
              onPress={() => this.props.navigation.navigate("ViewProfile")}
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
            onPressNext={this.nextPage.bind(this)}
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

  nextPage() {
    () => this.props.navigation.navigate("ViewProfile");
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
  emailItem: {
    borderBottomWidth: 0.5,
    borderColor: "rgba(0,0,0,0.3)"
  },
  emailSubject: {
    color: "rgba(0,0,0,0.5)"
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
  title: {
    backgroundColor: "#00c2cc",
    paddingTop:20,
    paddingBottom:20,
  
  },
  iconView: {
    position: "absolute",
    top: 65,
    left: 25,
  },
  scrollView: {
    bottom: 0,
    height: 450,
  },
  stepper: {
    flex: 1,
    bottom: 0,
    padding: 0,
    backgroundColor: "#ffffff"
  },
  break: {
    height:30
  }
});

export default CreateFlatScreen;
