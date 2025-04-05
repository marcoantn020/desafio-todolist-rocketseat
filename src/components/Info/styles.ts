import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginTop: 12,
        width: '100%',
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textCreated: {
        color: '#4EA8DE',
        fontSize: 20,
        fontWeight: 'bold',
    },
    textCompleted: {
        color: '#8284FA',
        fontSize: 20,
        fontWeight: 'bold',
    },
    countdown: {
        width: 26,
        height: 25,
        borderRadius: Math.min(26, 20) / 2,
        backgroundColor: '#333333',
        color: '#D9D9D9',
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    }

})