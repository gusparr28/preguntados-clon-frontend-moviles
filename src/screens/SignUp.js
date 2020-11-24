import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { signUpStyles } from '../styles/screens/SignUp';

import axios from 'axios';

const SignUp = ({ navigation }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitSignUp = async () => {
        try {
            await axios.post("https://preguntados-clon-moviles.herokuapp.com/signup", {
                name,
                email,
                password
            });
            navigation.navigate("Sign In");
        } catch (e) {
            Alert.alert(e.response.data.error);
        }
    }

    return (
        <View style={signUpStyles.container}>
            <View style={signUpStyles.inputContainer}>
                <TextInput
                    placeholder="Name"
                    onChangeText={name => setName(name)}
                    style={signUpStyles.input}
                />
                <TextInput
                    placeholder="Email"
                    onChangeText={email => setEmail(email)}
                    style={signUpStyles.input}
                />
                <TextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={password => setPassword(password)}
                    style={signUpStyles.input}
                />
                <View style={signUpStyles.btnContainer}>
                    <Button color="#ff5050" title="Sign Up" onPress={() => submitSignUp()} />
                </View>
                <Text onPress={() => navigation.navigate("SignIn")}>
                    Already have an account?
            </Text>
            </View>
        </View>
    )
}

export default SignUp;