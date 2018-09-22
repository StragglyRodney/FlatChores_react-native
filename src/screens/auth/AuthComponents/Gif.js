import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class Gif extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={styles.imageContainer}
                        source={{ uri: '/Users/danielwalker/Desktop/2018 T2/SWEN325/A2/FlatChores_react-native/src/screens/auth/Images/giphy.gif' }} />
                </View>
                <View style={styles.overlay} />
            </View >

        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    logoText: {
        marginVertical: 15,
        fontSize: 18,
        color: 'rgba(255,255,255,0.7)'
    },
    imageContainer: {
        width: 375,
        height: 750
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgb(0,0,0)'
    }
})
