import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Loading = ({ navigation }) => {

    const detectSignIn = async () => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            navigation.replace("Carousel");
        } else {
            navigation.replace("SignIn");
        }
    }

    useEffect(() => {
        detectSignIn();
    }, [])

    return (
        <View>
            <ActivityIndicator size="large" />
        </View>
    )
}

export default Loading;