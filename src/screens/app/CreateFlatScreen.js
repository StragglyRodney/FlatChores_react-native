// import liraries
import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Button } from "react-native";
import { SearchBar, ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import Stepper from "react-native-js-stepper";

const list = [
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President"
  },
  {
    name: "Jack Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  },
  {
    name: "Ben Rickman",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  },
  {
    name: "Angela Roskam",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  },
  {
    name: "Ben Rickman",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  },
  {
    name: "Angela Roskam",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  }
];

 Props = {}

class CreateFlatScreen extends Component {
  

  static navigationOptions = {
    tabBarIcon: <Icon name="weekend" size={25} />,
    tabBarLabel: "Flat",
    tabBarColor: "#3a1c31",
    shifting: true
  };

  constructor(props) {
    super(props);
    this.state = { text: "Useless Placeholder", textInput: "hello"};
    this.onClickNext = this.onClickNext.bind(this);
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
        <SearchBar
          clearIcon
          inputStyle={{
            backgroundColor: "lightgrey",
            color: "black"
          }}
          containerStyle={{
            backgroundColor: "transparent",
            borderTopWidth: 0,
            borderBottomWidth: 0
          }}
          onChangeText={value => {
            this.setState({ textInput: value });
          }}
          onClear={() => {}}
          onCancel={() => {}}
          cancelButtonTitle="Cancel"
          placeholder="search flatmates here"
        />
        <ScrollView>
          {list.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: l.avatar_url } }}
              title={l.name}
              subtitle={l.subtitle}
              onPress={() => this.props.navigation.navigate("ViewProfile")}
            />
          ))}
        </ScrollView>
        <Stepper
          validation={true}
          activeDotStyle={styles.activeDot}
          inactiveDotStyle={styles.inactiveDot}
          showTopStepper={true}
          showBottomStepper={true}
          steps={["Step 1", "Step 2"]}
          backButtonTitle="BACK"
          onPressNext={this.nextPage.bind(this)}
          onPress={true}
          nextButtonTitle="NEXT"
          activeStepStyle={styles.activeStep}
          inactiveStepStyle={styles.inactiveStep}
          activeStepTitleStyle={styles.activeStepTitle}
          inactiveStepTitleStyle={styles.inactiveStepTitle}
          activeStepNumberStyle={styles.activeStepNumber}
          inactiveStepNumberStyle={styles.inactiveStepNumber}
          onScrollPage={true}
        >
          <View />
          <View />
        </Stepper>
      </View>
    );
  }

  nextPage(){
    () => this.props.navigation.navigate("ViewProfile")
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c3e50"
  },
  activeDot: {
    backgroundColor: 'grey'
  },
  inactiveDot: {
    backgroundColor: '#ededed'
  },
  activeStep: {
    backgroundColor: 'grey'
  },
  inactiveStep: {
    backgroundColor: '#ededed'
  },
  activeStepTitle: {
    fontWeight: 'bold'
  },
  inactiveStepTitle: {
    fontWeight: 'normal'
  },
  activeStepNumber: {
    color: 'white'
  },
  inactiveStepNumber: {
    color: 'black'
  },
  progressStep:{
    
  }
});

// make this component available to the app
export default CreateFlatScreen;
