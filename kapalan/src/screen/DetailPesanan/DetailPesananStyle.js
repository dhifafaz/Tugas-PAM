import { StyleSheet } from 'react-native';

const detailPesananStyles = StyleSheet.create({
    cancelButton: {
        width: '45%',
        backgroundColor: 'red',
        borderRadius: 10,
        borderColor: 'red',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },
    cancelButtonText: {
        fontSize: 20,
        fontFamily: 'Ubuntu-Bold',
        color: '#fff',
    },
    titleTextIdentity: {
        fontSize: 16,
        fontFamily: 'Ubuntu-Bold',
        marginBottom: 0,
        width: '100%',
        textAlign: 'left',
        color: 'black',
        marginTop: 10,
    },
    textIdentity: {
        fontSize: 16,
        fontFamily: 'Ubuntu-reguler',
        marginBottom: 5,
        width: '100%',
        textAlign: 'left',
        color: 'black',
    },
    colContainer: {
        flexDirection: 'column',    
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)',
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
        backgroundColor: 'red',
        height: 50,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 10,
    },
    modalItemYes: {
        width: '40%',
        backgroundColor: 'green',
        height: 50,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 10,
    },
    modalText: {
        fontSize: 25,
        fontFamily: 'Ubuntu-Bold',
        marginBottom: 5,
        color: 'orange',
        width: '100%',
        textAlign: 'center',
    },  
    menuName: {
        fontSize: 18,
        fontFamily: 'Ubuntu-Bold',
        width: '100%',
        color: 'white',
        textAlign: 'center',
    },
    
})

export default detailPesananStyles;