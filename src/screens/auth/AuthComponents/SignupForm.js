import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class SignupForm extends React.Component {

    state = { email: '', password: '', confirmPassword: '', errorMessage: null }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                    placeholder="Name"
                    placeholderTextColor='#ffffff'
                />
                <TextInput style={styles.inputBox}
                    placeholder="Email"
                    onChangeText={email => this.setState({ email })}
                    placeholderTextColor='#ffffff'
                    value={this.state.email}
                />
                <TextInput style={styles.inputBox}
                    placeholder="Password"
                    placeholderTextColor='#ffffff'
                    onChangeText={password => this.setState({ password })}
                    secureTextEntry={true}
                    value={this.state.password}
                />
                <TextInput style={styles.inputBox}
                    placeholder="Re-enter Password"
                    placeholderTextColor='#ffffff'
                    onChangeText={confirmPassword => this.setState({ confirmPassword })}
                    secureTextEntry={true}
                    value={this.state.confirmPassword}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
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
        backgroundColor: '#ffa18a',
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