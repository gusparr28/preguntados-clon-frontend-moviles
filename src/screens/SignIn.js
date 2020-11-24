import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const SignIn = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitSignIn = async () => {
        try {
            let res = await axios.post("https://preguntados-clon-moviles.herokuapp.com/signin", {
                email,
                password
            });
            await AsyncStorage.setItem("token", res.data.token);
            navigation.navigate("Dashboard");
        } catch (e) {
            Alert.alert(e.response.data.error);
        }
    }

    return (
        <View>
            <TextInput
                placeholder="Email"
                onChangeText={email => setEmail(email)}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
            />
            <Button title="Sign In" onPress={() => submitSignIn()} />
            <Text onPress={() => navigation.navigate("SignUp")}>
                Don't you have an account?
            </Text>
        </View>
    )
}

export default SignIn;