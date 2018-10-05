// import liraries
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  ScrollView,
  TouchableOpacity,
  navigationOptions
} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
  SettingsDividerShort,
  SettingsDividerLong,
  SettingsEditText,
  SettingsCategoryHeader,
  SettingsSwitch,
  SettingsPicker
} from 'react-native-settings-components'
import email from 'react-native-email'


// create a component
class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Settings'
  }
  constructor() {
    super()
    this.state = {
      username: '',
      allowPushNotifications: false,
      gender: ''
    }
  }


  render() {
    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: Platform.OS === 'ios'
            ? colors.iosSettingsBackground
            : colors.white
        }}
      >
        <SettingsCategoryHeader
          title={'My Account'}
          textStyle={Platform.OS === 'android' ? { color: colors.monza } : null}
        />

        <SettingsDividerLong android={false} />

        <SettingsEditText
          title='Username'
          dialogDescription={'Enter your username.'}
          valuePlaceholder={this.state.username}
          negativeButtonTitle={'Cancel'}
          positiveButtonTitle={'Save'}
          onSaveValue={value => {
            this.setState({
              username: value
            })
          }}
          value={this.state.username}
          dialogAndroidProps={{
            widgetColor: colors.monza,
            positiveColor: colors.monza,
            negativeColor: colors.monza
          }}
        />
        <SettingsDividerShort />

        <SettingsPicker
          title='Gender'
          dialogDescription={'Choose your gender: '}
          valuePlaceholder={this.state.gender}
          possibleValues={[
            { label: 'male', value: 'male' },
            { label: 'female', value: 'female' },
            { label: 'other', value: 'other' }
          ]}
          negativeButtonTitle={'Cancel'}
          positiveButtonTitle={'Save'}
          onSaveValue={value => {
            this.setState({
              gender: value
            })
          }}
          value={this.state.gender}
          styleModalButtonsText={{ color: colors.monza }}
        />

        <SettingsCategoryHeader
          title={'Notifications'}
          textStyle={Platform.OS === 'android' ? { color: colors.monza } : null}
        />

        <SettingsSwitch
          title={'Allow Push Notifications'}
          valuePlaceholder={this.state.allowPushNotifications}
          onSaveValue={value => {
            this.setState({
              allowPushNotifications: value
            })
          }}
          value={this.state.allowPushNotifications}
          thumbTintColor={
            this.state.allowPushNotifications
              ? colors.switchEnabled
              : colors.switchDisabled
          }
        />

        <SettingsCategoryHeader
          title={'Contact Us'}
          textStyle={Platform.OS === 'android' ? { color: colors.monza } : null}
        />
        <TouchableOpacity onPress={() => this.props.navigation.push('Support')}>
          <Text style={{ marginTop: 10, marginLeft: 15, fontSize: 16 }} >Send us an email </Text>
        </TouchableOpacity>

      </ScrollView>
    )
  }
}

const colors = {
  iosSettingsBackground: 'rgb(235,235,241)',
  white: '#FFFFFF',
  monza: '#C70039',
  switchEnabled: Platform.OS === 'android' ? '#C70039' : null,
  switchDisabled: Platform.OS === 'android' ? '#efeff3' : null,
  switchOnTintColor: Platform.OS === 'android' ? 'rgba(199, 0, 57, 0.6)' : null,
  blueGem: '#27139A'
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00c2cc'
  }
})

// make this component available to the app
export default SettingsScreen
