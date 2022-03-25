import {StyleSheet} from 'react-native';

const rincianTiketStyle = StyleSheet.create({
    itemContainer: {
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 2,
    },
    textDanger: {
        fontSize: 15,
        fontWeight: '700',
        color: 'red',
        textAlign: 'center',
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 45,
        // paddingBottom: 30,
    },
    rincianCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
        width: '100%',
        flexDirection: 'column',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 25,
    },
    normalText: {
        fontSize: 18,
        fontFamily: 'Ubuntu-Medium',
        marginBottom: 20,
        width: '100%',
        textAlign: 'left',
        color: 'black',
    },
    rincianTiketInvoice: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'gainsboro',
        borderRadius: 10,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    pelabuhanText: {
        fontSize: 20,
        fontFamily: 'Ubuntu-Medium',
        marginBottom: 10,
        textTransform: 'capitalize',
        textAlign: 'center',
        color: 'black',
    },
    colContainer: {
        flexDirection: 'column',    
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    h3Text: {
        fontSize: 16,
        fontFamily: 'Ubuntu-Medium',    
        marginBottom: 5,
        marginTop: 5,
        width: '100%',
        color: 'black',
    },
    notmalText: {
        fontSize: 14,
        fontFamily: 'Ubuntu-Reguler',
        marginBottom: 5,
        width: '100%',
        color: 'black',
        textTransform: 'capitalize',
    },
});

export default rincianTiketStyle;