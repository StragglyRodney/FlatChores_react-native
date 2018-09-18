import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class LoginForm extends React.Component {


    render() {
        return (
            <View style = {styles.container}>
            <TextInput style = {styles.inputBox} 
            placeholder= "Email"
            placeholderTextColor = '#ffffff'
            />
            <TextInput style = {styles.inputBox}
            placeholder= "Password"
            placeholderTextColor = '#ffffff'
            secureTextEntry= {true}
            />
            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>{this.props.type}</Text>
            </TouchableOpacity>
            </View>
        )
    }
}

    const styles = StyleSheet.create({
        container : {
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center'
        },

        inputBox: {
            width: 300,
            backgroundColor: 'rgba(255,255,255,0.2)',
            borderRadius: 10,
            paddingHorizontal: 16,
            paddingVertical: 12,
            fontSize: 16,
            color: '#ffffff',
            marginVertical: 6,
        
        },

        button: {
            width: 300,
            backgroundColor: '#1c313a',
            borderRadius: 10,
            paddingVertical: 12,
            marginVertical: 6,
        
        },

        buttonText: {
            width: 300,
            fontSize: 20,
            fontWeight: '500',
            color: '#ffffff',
            textAlign: 'center'
        },
        
    });