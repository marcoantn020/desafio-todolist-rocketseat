import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#0D0D0D',
        color: '#808080',
    },
    brand: {
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        gap: 8,
    },
    input: {
        flex: 1,
        height: 50,
        paddingHorizontal: 16,
        borderRadius: 6,
        backgroundColor: '#262626',
        color: '#F2F2F2',
    },
    button: {
        width: 52,
        height: 52,
        backgroundColor: '#1E6F9F',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxTask: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 50,
        borderTopWidth: 1,
        borderColor: '#333333',
    },
    textTaskTitle: {
        marginTop: 10,
        fontSize: 14,
        color: '#808080',
        fontWeight: 'bold',
    },
    textTaskSubtitle: {
        fontSize: 14,
        color: '#808080',
    }
})