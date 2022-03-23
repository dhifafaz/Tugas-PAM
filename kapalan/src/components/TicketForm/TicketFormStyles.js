import { StyleSheet } from 'react-native';

const ticketFormStyles = StyleSheet.create({
    formCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    formCardHeader: {
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    headerText: {
        fontSize: 40,
        fontFamily: 'Ubuntu-Bold',
        marginBottom: 30,
        width: '100%',
        textAlign: 'center',
        color: 'orange',
    },
    button: {
        backgroundColor: "orange",
        width: "80%",
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 30,
        fontFamily: 'Ubuntu-Bold',
    },
    formCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
        paddingBottom: 30,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    formCardHeader: {
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    headerText: {
        fontSize: 40,
        fontFamily: 'Ubuntu-Bold',
        marginBottom: 30,
        width: '100%',
        textAlign: 'center',
        color: 'orange',
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
});

export default ticketFormStyles;