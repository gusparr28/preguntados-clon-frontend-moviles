import { StyleSheet } from 'react-native';

export const signUpStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
    },
    input: {
        width: "60%",
        borderColor: "red",
        borderWidth: 2,
        margin: 10,
        padding: 12
    },
    inputContainer: {
        width: "100%",
        alignItems: "center"
    },
    btnContainer: {
        overflow: "hidden",
        borderRadius: 100
    }
})