import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

import { profileStyles } from '../styles/screens/Profile';

const Profile = ({ navigation }) => {

    const signOut = async () => {
        try {
            await AsyncStorage.removeItem('token');
            navigation.navigate("SignIn");
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <View style={profileStyles.container}>
            <View>
                <Button color="red" mode="contained" onPress={() => signOut()}>
                    Sign Out
                </Button>
            </View>
        </View>
    )
}

export default Profile;