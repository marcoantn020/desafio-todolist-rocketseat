import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#262626',
        borderRadius: 8,
        marginBottom: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 10,
    },
    text: {
        width: '85%',
        color: '#F2F2F2',
        paddingHorizontal: 16,
        fontSize: 18,
        textAlign: "left",
    },
    trash: {

    },
    textDone: {
        color: '#808080',
        width: '85%',
        paddingHorizontal: 16,
        fontSize: 18,
        textAlign: "left",
        textDecorationLine: "line-through",
    }
})