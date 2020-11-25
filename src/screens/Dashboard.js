import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './Home';
import Leaderboards from './Leaderboards';
import Profile from './Profile';

const Tab = createMaterialBottomTabNavigator();
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
                    <MaterialCommunityIcons name="home" size={26} />
                )
            }} />
            <Tab.Screen name="Leaderboards" component={LeaderboardsStackScreen} options={{
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="trophy" size={26} />
                )
            }} />
            <Tab.Screen name="Profile" component={ProfileStackScreen} options={{
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="account" size={26} />
                )
            }} />
        </Tab.Navigator>
    )
}

export default Dashboard;