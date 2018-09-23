// import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity
} from "react-native";
import { ListItem, Button } from "react-native-elements";
import SearchInput, { createFilter } from "react-native-search-filter";
import Icon from "react-native-vector-icons/MaterialIcons";
import Stepper from "react-native-js-stepper";

const emails = [
  {
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
  },
  {
    name: "Ben Rickman",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subject: "Vice Chairman"
  },
  {
    name: "Angela Roskam",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subject: "Vice Chairman"
  },
  {
    name: "Ben Rickman",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subject: "Vice Chairman"
  },
  {
    name: "Angela Roskam",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subject: "Vice Chairman"
  }
];

const flatmates = [
  {
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
  },
  {
    name: "Ben Rickman",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subject: "Vice Chairman"
  },
  {
    name: "Angela Roskam",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subject: "Vice Chairman"
  },
  {
    name: "Ben Rickman",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subject: "Vice Chairman"
  },
  {
    name: "Angela Roskam",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subject: "Vice Chairman"
  }
];

Props = {};
const suggestedFlatmates = [];
const KEYS_TO_FILTERS = ["name", "subject"];

class CreateFlatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Useless Placeholder",
      textInput: "hello",
      searchTerm: ""
    };
    this.onClickNext = this.onClickNext.bind(this);
  }

  static navigationOptions = {
    tabBarIcon: <Icon name="weekend" size={25} />,
    tabBarLabel: "Flat",
    tabBarColor: "#3a1c31",
    shifting: true
  };

  onClickNext() {
    const { steps, currentStep } = this.state;
    this.setState({
      currentStep: currentStep + 1
    });
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  render() {
    filteredEmails = emails.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );
    filteredEmails = filteredEmails.slice(0, 3);
    if (this.state.searchTerm.length == 0) {
      filteredEmails = [];
    }
    return (
      <View style={styles.container}>
        <SearchInput
          style={styles.container}
          onChangeText={term => {
            this.searchUpdated(term);
          }}
          style={styles.searchInput}
          placeholder="Search for your flatmates!!"
        />

        <View style={styles.scrollView}>
          <ScrollView>
            {filteredEmails.map(email => {
              return (
                <ListItem
                  key={email.id}
                  leftAvatar={{ source: { uri: email.avatar_url } }}
                  title={email.name}
                  subtitle={email.subject}
                  onPress={() => this.props.navigation.navigate("ViewProfile")}
                />
              );
            })}

            <Text style={styles.yourFlatText}>myFlatmates</Text>

            {flatmates.map((l, i) => (
              <ListItem
                key={i}
                leftAvatar={{ source: { uri: l.avatar_url } }}
                title={l.name}
                subtitle={l.subtitle}
                onPress={() => this.props.navigation.navigate("ViewProfile")}
              />
            ))}
          </ScrollView>
        </View>

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
    backgroundColor: "#00c2cc",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
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
  progressStep: {},
  emailItem: {
    borderBottomWidth: 0.5,
    borderColor: "rgba(0,0,0,0.3)"

  },
  emailSubject: {
    color: "rgba(0,0,0,0.5)"
  },
  searchInput: {
    padding: 10,
    borderColor: "#CCC",
    borderWidth: 1
  },
  yourFlatText: {
    textAlign: "center", // <-- the magic
    fontWeight: "bold",
    fontSize: 36,
    fontFamily: "Georgia",
    backgroundColor:"#ffffff"

  },
  scrollView: {
    bottom: 0,
    height: 500
  },
  stepper:{
    flex:1,
    bottom:0,
    padding:0,
    backgroundColor:"#ffffff"
  }
  
});

// make this component available to the app
export default CreateFlatScreen;
