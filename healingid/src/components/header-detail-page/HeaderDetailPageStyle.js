import React from 'react';
import {
    StyleSheet,
    Colors,
} from 'react-native';

const headerDetailPageStyle = StyleSheet.create({
    headerContainer: {
        flexDirection: 'column',
        backgroundColor: 'limegreen',
        // alignItems: 'center',
        height: 150,
        marginLeft: -10,
        marginRight: -10,
        zIndex: 1,
        paddingTop: 30,
        paddingLeft: 30,
        paddingRight: 30,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    columnContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    backIcon: {
        fontSize: 40,
    },
    userIcon: {
        fontSize: 40,
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: '700',
        color: 'white',
        alignItems: 'center',
    },
    bodyText: {
        fontSize: 16,
        fontWeight: '400',
        color: 'white',
    },
});

export default headerDetailPageStyle;