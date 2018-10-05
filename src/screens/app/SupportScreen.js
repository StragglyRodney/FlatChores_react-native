// import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import SupportForm from '../../components/SupportForm'
import LogoForEmail from '../../components/LogoForEmail';
// create a component
class SupportScreen extends Component {
    static navigationOptions = { header: null }

    render() {
        return (
            <View style={styles.container}>
                <LogoForEmail />
                <SupportForm type='Support' />
            </View>
        )
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    signupText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16
    },
    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '700'
    }
})

// make this component available to the app
export default SupportScreen
