import React from 'react';
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
    // iconView: {
    //     position: "absolute",
    //     zIndex: 1,
    //     flex: 1,
    //     alignContent: 'center',
    //     justifyContent: 'center',
    // },
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
    }
});

export default formStyle;