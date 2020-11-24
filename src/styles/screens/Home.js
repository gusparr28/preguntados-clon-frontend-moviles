import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    },
    secondContainer: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "flex-start"
    },
    thirdContainer: {
        height: "50%",
        justifyContent: "center",
        alignItems: "center"
    },
    imageContainer: {
        height: 250,
        width: 250,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },
    image: {
        flex: 1,
        resizeMode: "contain"
    },
    topAnimatedView: {
        backgroundColor: "blue",
        height: 500,
        width: "100%",
        borderRadius: 125,
        position: "absolute",
        alignSelf: "center",
        marginTop: 300
    },
    animatedView: {
        backgroundColor: "blue",
        height: "40%",
        width: "100%",
        position: "absolute",
        bottom: 0,
        alignSelf: "center",
        padding: 20
    },
    textAnimatedView: {
        textAlign: "center",
        marginBottom: 10,
        color: "white",
        fontSize: 18
    }
})  