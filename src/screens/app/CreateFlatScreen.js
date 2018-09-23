// import liraries
import React, { Component } from "react";
import { View, StyleSheet, ScrollView,Text, TouchableOpacity } from "react-native";
import {ListItem } from "react-native-elements";
import SearchInput, { createFilter } from 'react-native-search-filter';
import Icon from "react-native-vector-icons/MaterialIcons";
import Stepper from "react-native-js-stepper";
import { Button } from 'react-native-elements';

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

 Props = {}
 const suggestedFlatmates=[];
 const KEYS_TO_FILTERS = ['name', 'subject'];

class CreateFlatScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = { text: "Useless Placeholder", textInput: "hello",searchTerm:''};
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
    this.setState({ searchTerm: term })
  }

  render() {
    const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <View style={styles.container}>
      <SearchInput 
          onChangeText={(term) => { this.searchUpdated(term) }} 
          style={styles.searchInput}
          placeholder="Type a message to search"
          />
        <ScrollView>
          {filteredEmails.map(email => {
            return (
              <ListItem
              key={email.id}
              leftAvatar={{ source: { uri: email.avatar_url } }}
              title={email.name}
              subtitle={email.subtitle}
              onPress={() => this.props.navigation.navigate("ViewProfile")}
            />
            )
          })}
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
    
  },
  emailItem:{
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  searchInput:{
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1
  }
});

// make this component available to the app
export default CreateFlatScreen;
