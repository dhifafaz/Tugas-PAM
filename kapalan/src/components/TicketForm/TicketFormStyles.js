import { StyleSheet } from 'react-native';

const ticketFormStyles = StyleSheet.create({
    formCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        // flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    formCardHeader: {
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    headerText: {
        fontSize: 20,
        fontFamily: 'Ubuntu-Bold',
        marginBottom: 5,
        width: '100%',
        textAlign: 'center',
    },

});

export default ticketFormStyles;