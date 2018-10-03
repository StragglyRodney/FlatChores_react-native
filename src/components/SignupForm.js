import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Loader from '../components/Loader';
import firebase from 'firebase'
import { withNavigation } from 'react-navigation'

class SignupForm extends React.Component {

    state = { email: '', password: '', confirmPassword: '', errorMessage: null, loading: false }

    onSignUpPress() {
        this.setState({ error: '', loading: true })
        const { email, password } = this.state

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ error: '', loading: false })
                this.props.navigation.goBack()
            })
            .catch(() => {
                // Login was not successful, let's create a new account
                this.setState({ error: 'Signup failed.', loading: false })
            })

    }

    render() {
        return (
            <View style={styles.container}>
                <Loader
                    loading={this.state.loading} />
                <TextInput style={styles.inputBox}
                    placeholder="Name"
                    placeholderTextColor='#ffffff'
                />
                <TextInput style={styles.inputBox}
                    placeholder="Email"
                    onChangeText={email => this.setState({ email })}
                    autoCapitalize='none'
                    placeholderTextColor='#ffffff'
                    value={this.state.email}
                />
                <TextInput style={styles.inputBox}
                    placeholder="Password"
                    placeholderTextColor='#ffffff'
                    autoCapitalize='none'
                    onChangeText={password => this.setState({ password })}
                    secureTextEntry={true}
                    value={this.state.password}
                />
                <TextInput style={styles.inputBox}
                    placeholder="Re-enter Password"
                    placeholderTextColor='#ffffff'
                    autoCapitalize='none'
                    onChangeText={confirmPassword => this.setState({ confirmPassword })}
                    secureTextEntry={true}
                    value={this.state.confirmPassword}
                />
                <TouchableOpacity onPress={this.onSignUpPress.bind(this)}
                    style={styles.button}
                >
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

export default withNavigation(SignupForm)