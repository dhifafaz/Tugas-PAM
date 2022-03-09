import React from 'react';
import {
    StyleSheet,
} from 'react-native';

const searchResultStyle = StyleSheet.create({
    resultContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 30,
    },
    itemContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',

    },
    itemContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    maskapai: {
        fontSize: 20,
        fontWeight: '700',
        color: 'black',
    },
    bandara: {
        fontSize: 15,
        fontWeight: '700',
        color: 'black',
    },
    tanggal: {
        fontSize: 15,
        fontWeight: '700',
        color: 'black',
    },
});

export default searchResultStyle;