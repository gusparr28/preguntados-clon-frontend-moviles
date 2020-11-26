import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';

import { homeStyles } from '../styles/screens/Home';

const Home = ({ navigation }) => {

    return (
        <View style={homeStyles.container}>
            <Text style={homeStyles.title}>Quiz App</Text>
            <Text style={homeStyles.subtitle}>Prove your knowledge by answering cultural questions</Text>
            <View style={homeStyles.header}>
                <Image style={homeStyles.image} source={{uri: "https://res.cloudinary.com/instagram-web2/image/upload/v1606409415/preguntados-clon-moviles/home_mbegem.jpg"}} />
            </View>
            <View style={homeStyles.button}>
                <Button mode="contained" onPress={() => navigation.navigate("Questions")} color="#3465d9">
                    Play
                </Button>
            </View>
        </View>
    )
}

export default Home;