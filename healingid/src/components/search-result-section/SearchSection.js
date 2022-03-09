import React from 'react';
import {
    View,
    Text,
    FlatList,
} from 'react-native';
import {JADWAL, MASKAPAI, BANDARA} from '../../action/DataBase';
import searchResultStyle from './SearchResultStyle.js';

const SearchSection = ({dataMaster}) => {
    

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>sdsad</Text>
            <Text>Details Screen</Text>
            <Text>Asal: {dataMaster.asal}</Text>
            <Text>Tujuan: {dataMaster.tujuan}</Text>
            <Text>Tanggal: {dataMaster.tanggal}</Text>
            <Text>Maskapai: {MASKAPAI[0].maskapai_nama}</Text>
        </View>
    );
};

export default SearchSection;