import React, { Component } from "react";
import {View, StyleSheet, ScrollView} from "react-native";
import {ListItem} from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import SearchInput, { createFilter } from "react-native-search-filter";
import { AsyncStorage } from "react-native"

const KEYS_TO_FILTERS = ["name", "subject"]; //in this case we filter search by name, but this can be done by email if need be
var flatmates = [];
var data = require("./users.json");//import dummy database

class AddFlatMateScreen extends Component {

  static navigationOptions = {
    title: "CREATE A FLAT"
  };

  constructor(props) {
    super(props);
    this.state = { searchTerm: "" }; //nothing to search yet
    this.loadData();
  }


  /* load dummy database into the variable flatmates list */
  loadData() {
    for (let i = 0; i < Object.keys(data).length; i++) {
      var flatmate = data[i];
      flatmates.push({
        name: flatmate.name,
        avatar_url: flatmate.avatar_url,
        subject: flatmate.subject,
        description: flatmate.description,
        inFlat:flatmate.inFlat
      });
    }
  }


  /* Called upon on user input */
  searchUpdated(term) {
    this.setState({ searchTerm: term }); 
  }

  render() {
    filteredflatmates = []; //create and empty filtered list

    //if search is empty, dont update filtered list
    if (this.state.searchTerm.length == 0) {
      filteredflatmates = [];
    } else {
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
            this.searchUpdated(term); //on user input update the search "term"
          }}
          style={styles.searchInput}
          placeholder="Search for your flatmates!!"
        />
        <View style={styles.scrollView}>
          <ScrollView>
            {filteredflatmates.map(user => {
              return (
                <ListItem
                  key={user.id}
                  title={user.name}
                  subtitle={user.subject}
                  onPress={()=> {
                    AsyncStorage.setItem("flatmate", JSON.stringify(user)); //using AsyncStorage
                    this.props.navigation.goBack(null)
                  }}
                  rightIcon={<Icon style={styles.iconStyle}raised name="person-add" size={30} />}
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
    backgroundColor: "#ffffff",
    color:"#00c2cc",
    
  },
  searchInput: {
    padding: 10,
    borderColor: "#ffa18a",
    borderWidth: 1,
    borderRadius: 10,
    margin: 20
  },
  scrollView: {
    bottom: 0
  },
  iconStyle: {
    color: "#00c2cc"
  }

});

// make this component available to the app
export default AddFlatMateScreen;
