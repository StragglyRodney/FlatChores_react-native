// import liraries
import React, { Component } from "react";
import {View, StyleSheet, ScrollView, Text, TouchableOpacity} from "react-native";
import { ListItem, Button } from "react-native-elements";

import Icon from "react-native-vector-icons/MaterialIcons";
import SearchInput, { createFilter } from "react-native-search-filter";

//
const flatmates = [
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subject: "Vice President",
    description:"insert description here"
  },
  {
    name: "Jack Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subject: "Vice Chairman",
    description:"insert description here"
  },
  {
    name: "Ben Rickman",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subject: "Vice Chairman",
    description:"insert description here"
  },
  {
    name: "Angela Roskam",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subject: "Vice Chairman",
    description:"insert description here"
  },
  {
    name: "Ben Rickman",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subject: "Vice Chairman",
    description:"insert description here"
  },
  {
    name: "Angela Roskam",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subject: "Vice Chairman",
    description:"insert description here"
  }
];

const KEYS_TO_FILTERS = ["name", "subject"]; //in this case we filter search by name, but this can be done by email if need be 

class AddFlatMateScreen extends Component {
  
  static navigationOptions = {
    title: 'CREATE A FLAT'
  }

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""//nothing to search yet
    };
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  render() {
    filteredflatmates=[]//create and empty filtered list
    
    //if search is empty, dont update filtered list
    if (this.state.searchTerm.length == 0) {
      filteredflatmates = [];
    }
    else{
      //update filtered list
      filteredflatmates = flatmates.filter(
        createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
      );
      //only display the top 3 filteredfltmates (can be changed if need be)
      filteredflatmates = filteredflatmates.slice(0, 3);
    }
    return (
      <View style={styles.container}>
        <SearchInput
          style={styles.container}
          onChangeText={term => {
            this.searchUpdated(term);//on user input update the search "term"
          }}
          style={styles.searchInput}
          placeholder="Search for your flatmates!!"
        />
        <View style={styles.scrollView}>
          <ScrollView>
            {filteredflatmates.map(email => {
              return (
                <ListItem
                  key={email.id}
                  leftAvatar={{ source: { uri: email.avatar_url } }}
                  title={email.name}
                  subtitle={email.subject}
                  onPress={() =>  this.props.navigation.goBack(null)}
                  rightIcon={<Icon
                    raised
                    name="person-add"
                    size={30}
                  />}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
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
  flatmatesubject: {
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
  scrollView: {
    bottom: 0
  }
});

// make this component available to the app
export default AddFlatMateScreen;
