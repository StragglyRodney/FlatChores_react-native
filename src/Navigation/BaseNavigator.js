import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import Bookmarks from "../components/Bookmarks";
import Icon from '@expo/vector-icons/FontAwesome';
import CreateChoresScreen from "../app/CreateChoresScreen";
import FlatScreen from "../app/FlatScreen";
import HomeScreen from "../app/HomeScreen";
import NotificationScreen from "../app/NotificationScreen";
import ProfileScreen from "../app/ProfileScreen";
import SettingsScreen from "../app/SettingsScreen";

import {AddButton} from "../components/AddButton";

const BaseNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="Home"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
    Flat: {
        screen: FlatScreen,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="Flat"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="Settings"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#F8F8F8',
        inactiveTintColor: '#586589',
        style: {
            backgroundColor: '#171F33'
        },
        tabStyle: {}
    }
});

const defaultGetStateForAction = BaseNavigator.router.getStateForAction;

// BaseNavigator.router.getStateForAction = (action, state) => {
//     if (action.type === NavigationActions.NAVIGATE && action.routeName === 'Adding') {
//         return null;
//     }
//
//     return defaultGetStateForAction(action, state);
// };

export {BaseNavigator};