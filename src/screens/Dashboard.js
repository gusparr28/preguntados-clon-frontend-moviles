import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import Leaderboards from './Leaderboards';
import Profile from './Profile';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const LeaderboardsStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen
            options={{ headerLeft: false }}
            name="Home"
            component={Home}>
        </HomeStack.Screen>
    </HomeStack.Navigator>
)

const LeaderboardsStackScreen = () => (
    <LeaderboardsStack.Navigator>
        <LeaderboardsStack.Screen
            options={{ headerLeft: false }}
            name="Leaderboards"
            component={Leaderboards}>
        </LeaderboardsStack.Screen>
    </LeaderboardsStack.Navigator>
)

const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
        <ProfileStack.Screen
            options={{ headerLeft: false }}
            name="Profile"
            component={Profile}>
        </ProfileStack.Screen>
    </ProfileStack.Navigator>
)

const Dashboard = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStackScreen} options={{
                tabBarIcon: () => (
                    <Icon name="ios-home" size={26} />
                )
            }} />
            <Tab.Screen name="Leaderboards" component={LeaderboardsStackScreen} options={{
                tabBarIcon: () => {
                    <Icon name="trophy" size={26} />
                }
            }} />
            <Tab.Screen name="Profile" component={ProfileStackScreen} options={{
                tabBarIcon: () => {
                    <Icon name="" size={26} />
                }
            }} />
        </Tab.Navigator>
    )
}

export default Dashboard;