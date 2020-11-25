import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { carouselStyles } from '../styles/screens/Carousel';

import Swiper from 'react-native-swiper/src';

const Carousel = ({ navigation }) => {

    return (
        <Swiper
            loop={false}
            dot={<View style={carouselStyles.dot} />}
            activeDot={<View style={carouselStyles.activeDot} />}
        >
            <View style={carouselStyles.slide}>
                <View style={carouselStyles.header}>
                    <Image
                        source={require('../../assets/image1.jpg')}
                        style={carouselStyles.image}
                        resizeMode={"stretch"}
                    />
                </View>
                <View style={carouselStyles.footer}>
                    <Text style={carouselStyles.title}>Show the world your knowledge!</Text>
                </View>
            </View>

            <View style={carouselStyles.slide}>
                <View style={carouselStyles.header}>
                    <Image
                        source={require('../../assets/image2.png')}
                        style={carouselStyles.image}
                        resizeMode={"stretch"}
                    />
                </View>
                <View style={carouselStyles.footer}>
                    <Text style={carouselStyles.title}>
                        Have fun and enjoy an experience full of surveys!
                    </Text>
                </View>
            </View>

            <View style={carouselStyles.slide}>
                <View style={carouselStyles.header}>
                    <Image
                        source={require('../../assets/image3.png')}
                        style={carouselStyles.image}
                        resizeMode={"stretch"}
                    />
                </View>
                <View style={carouselStyles.footer}>
                    <Text style={carouselStyles.title}>Join our community!</Text>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity onPress={() => navigation.navigate("SignUp")} style={[carouselStyles.button, {
                            borderColor: "#3465d9",
                            borderWidth: 1,
                            borderRadius: 50,
                            marginTop: 15
                        }]}>
                            <Text style={{ color: "#3465d9" }}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("SignIn")} style={[carouselStyles.button, {
                            backgroundColor: "#3465d9",
                            borderRadius: 50,
                            marginTop: 15,
                            marginLeft: 20
                        }]}>
                            <Text style={{ color: "white" }}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Swiper>
    )
}

export default Carousel;