// import liraries
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
// create a component

class ViewProfile extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      //passed in as a parameter is a flatmate conisting of "avatar_url, name, suject, and description, inFlat (boolean)"
      flatmate:this.props.navigation.state.params.flatmate
    };
  }


  render () {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: this.state.flatmate.avatar_url}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{this.state.flatmate.name}</Text>
              <Text style={styles.info}>{this.state.flatmate.subject}</Text>
              <Text style={styles.description}>{this.state.flatmate.description}</Text>
              
              <TouchableOpacity style={styles.buttonContainer} onPress={this.removeFlatmate}>
                <Text>Remove Flatmate</Text>  
              </TouchableOpacity>       
            </View>
        </View>
      </View>
    )
  }
removeFlatmate(){
  //remove flatmate here, using firebase
}

}
const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00c2cc",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00c2cc",
  },
});
 
// make this component available to the app
export default ViewProfile
