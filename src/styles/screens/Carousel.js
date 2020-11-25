import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get("screen");
const heightImage = height * 0.5 * 0.8;
const widthImage = heightImage * 1.1;
const widthButton = width * 0.3;

export const carouselStyles = StyleSheet.create({
    slide: {
        flex: 1,
        backgroundColor: "white"
    },
    header: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    footer: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 20
    },
    image: {
        height: heightImage,
        width: widthImage
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#3465d9",
        textAlign: "center"
    },
    subtitle: {
        color: "gray",
        textAlign: "center",
        marginTop: 20
    },
    dot: {
        backgroundColor: "rgba(52, 101, 127, .4)",
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 5,
        marginVertical: 3
    },
    activeDot: {
        backgroundColor: "#3465d9",
        width: 20,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 5,
        marginVertical: 3
    },
    button: {
        width: widthButton,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    }
})