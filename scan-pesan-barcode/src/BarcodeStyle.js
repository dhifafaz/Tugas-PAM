import { StyleSheet } from "react-native";

const BarcodeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171515',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'lightgray',
    },
    mainText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
        color: '#000',
    },
    boxBarcode: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 250,
        borderRadius: 40,
        overflow: 'hidden',
        backgroundColor: 'blue',
    },
    button:{
        marginTop: 20,
        padding: 10,
        backgroundColor: 'indigo',
        borderRadius: 10,
    },
    buttonText:{
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        width: 240,
    },
    contentArea: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'midnightblue',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: 320,
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'lightgray',
    },
})

export default BarcodeStyles;