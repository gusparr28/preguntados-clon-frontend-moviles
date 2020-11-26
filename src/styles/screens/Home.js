import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get("screen");
const heightImage = height * 0.5 * 0.8;
const widthImage = heightImage * 1.1;

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 50,
        textAlign: "center",
        fontWeight: "bold",
        flex: 1,
        marginTop: 10
    },
    subtitle: {
        fontSize: 20,
        textAlign: "center"
    },
    image: {
        height: heightImage,
        width: widthImage,
        alignItems: "center",
        justifyContent: "center"
    },
    header: {
        flex: 6,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        marginBottom: 40
    }
})  