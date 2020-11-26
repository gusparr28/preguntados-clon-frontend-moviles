import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import axios from 'axios';

import { signUpStyles } from '../styles/screens/SignUp';

const SignUp = ({ navigation }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const submitSignUp = async () => {
        try {
            setLoading(true);
            let res = await axios.post("https://preguntados-clon-moviles.herokuapp.com/signup", {
                name,
                email,
                password
            });
            setLoading(false);
            setTimeout(() => {
                navigation.navigate("SignIn");
            }, 500);
        } catch (e) {
            Alert.alert(e.response.data.error);
        }
    }

    return (
        <View style={signUpStyles.container}>
            <Text style={signUpStyles.title}>Sign Up</Text>
            <Text style={signUpStyles.subtitle}>Sign Up with Email and Password</Text>
            <View>
                <View style={signUpStyles.section}>
                    <MaterialIcons name="person" size={20} color="#3465d9" />
                    <TextInput
                        placeholder="Name"
                        style={signUpStyles.textInput}
                        onChangeText={name => setName(name)}
                    />
                </View>
                <View style={signUpStyles.section}>
                    <MaterialIcons name="email" size={20} color="#3465d9" />
                    <TextInput
                        placeholder="Email"
                        style={[signUpStyles.textInput, {
                            color: "#3465d9"
                        }]}
                        onChangeText={email => setEmail(email)}
                    />
                </View>
                <View style={signUpStyles.section}>
                    <MaterialIcons name="lock-outline" size={20} color="#3465d9" />
                    <TextInput
                        placeholder="Password"
                        style={[signUpStyles.textInput, {
                            color: "#3465d9"
                        }]}
                        secureTextEntry
                        onChangeText={password => setPassword(password)}
                    />
                </View>
            </View>
            {loading ? <ActivityIndicator /> : null}
            <TouchableOpacity onPress={() => submitSignUp()} style={signUpStyles.signIn}>
                <Text style={signUpStyles.textSignIn}>Sign Up</Text>
            </TouchableOpacity>
            <View style={signUpStyles.signUp}>
                <Text style={[signUpStyles.textSignUp, {
                    color: "gray"
                }]}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                    <Text style={[signUpStyles.textSignUp, {
                        color: "#3465d9",
                        marginLeft: 3
                    }]}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUp;
