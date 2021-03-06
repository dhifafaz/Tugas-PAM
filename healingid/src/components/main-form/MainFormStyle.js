import { StyleSheet } from 'react-native';

const formStyle = StyleSheet.create({
    formCardStyle: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 20,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        width: '100%',
        position: 'absolute',
        top: '15%',
    },
    inputText: {
        flex: 1,
    },
    formInput: {   
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 60,
        borderRadius: 5,
        margin: 10,
    },
    inputIcon: {
        fontSize: 25,
        padding: 10,
    },
    inputLabel: {
        fontSize: 20,
        color: '#000',
        fontWeight: '700',
        textAlign: 'left',
        paddingLeft: 10,
    },
    container: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'orange',
        borderRadius: 5,
        padding: 10,
        width: '70%',
    },
    buttonText: {
        textAlign: 'center',
        color: '#000',
        fontSize: 20,
        fontWeight: '700',
    },
    copyRight: {
		zIndex: 1,
		textAlign: 'center',
		color: '#000'
	},
});

export default formStyle;
