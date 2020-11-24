import React from 'react';
import { View, Text, Button, Image, Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';

import { homeStyles } from '../styles/screens/Home';

const Home = ({ navigation }) => {

    return (
        <View style={homeStyles.container}>
            <View style={homeStyles.secondContainer}>
                <View style={homeStyles.thirdContainer}>
                    <View style={homeStyles.imageContainer}>
                        <Image style={homeStyles.image} />
                    </View>
                </View>

                <Animated.View style={homeStyles.topAnimatedView} />

                <Animated.View style={homeStyles.animatedView}>
                    <Text style={homeStyles.textAnimatedView}>Quiz App</Text>
                    <Text>Prove your knowledge by answering cultural questions</Text>
                    <Button title="Play" onPress={() => navigation.navigate("Questions")} />
                </Animated.View>
            </View>
        </View>
    )
}

export default Home;