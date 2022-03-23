import { StyleSheet } from 'react-native';

const bottBarStyle = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalCard: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
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
    modalItem: {
        width: '40%',
        height: 80,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#cecece',
        borderRadius: 10,
    },
    iconStyle: {
        fontSize: 30,
    },
    modalTitle: {
        fontSize: 40,
        fontFamily: 'Ubuntu-Bold',
        marginBottom: 5,
        width: '100%',
        textAlign: 'center',
    },  
    menuName: {
        fontSize: 12,
        fontFamily: 'Ubuntu-Bold',
        marginTop: 10,
        width: '100%',
        textAlign: 'center',
    },
});

export default bottBarStyle;