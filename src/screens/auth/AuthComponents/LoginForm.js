import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation'
import Firebase from 'react-native-firebase'

class LoginForm extends React.Component {
    state = { email: '', password: '', errorMessage: null }
    static navigationOptions = {
        header: { visible: false },
        title: 'Welcome',
    };

    handleLogin = () => {
        // TODO: Firebase stuff...
        console.log('handleLogin')
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                    placeholder="Email"
                    placeholderTextColor='#ffffff'
                    autoCapitalize="none"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput style={styles.inputBox}
                    placeholder="Password"
                    placeholderTextColor='#ffffff'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('App')}>
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

export default withNavigation(LoginForm)