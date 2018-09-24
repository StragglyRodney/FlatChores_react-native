// import liraries
import React, { Component } from "react";
import {View, StyleSheet, ScrollView, Text, TouchableOpacity} from "react-native";
import { ListItem, Button } from "react-native-elements";
import SearchInput, { createFilter } from "react-native-search-filter";

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

const suggestedFlatmates = [];//updates on user input in searchbar
const KEYS_TO_FILTERS = ["name", "subject"]; //in this case we filter search by name, but this can chnage to email if need be 

class AddFlatMateScreen extends Component {
  
  static navigationOptions = {
    title: 'CREATE A FLAT'
  }

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

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
          </ScrollView>
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
    backgroundColor: "#00c2cc"
  },
  emailItem: {
    borderBottomWidth: 0.5,
    borderColor: "rgba(0,0,0,0.3)"
  },
  emailSubject: {
    color: "rgba(0,0,0,0.5)"
  },
  searchInput: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#ffffff',
    padding: 10,
    borderColor: "#02c4ce",
    borderWidth: 1,
    borderRadius: 10,
    margin:20,
  },
  yourFlatText: {
    textAlign: "center", // <-- the magic
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Georgia",
    backgroundColor:"#ffa18a"
  },
  scrollView: {
    bottom: 0
  }
});

// make this component available to the app
export default AddFlatMateScreen;
