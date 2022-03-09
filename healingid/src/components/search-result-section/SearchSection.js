import React from 'react';
import {
    View,
    Text,
    FlatList,
} from 'react-native';
import {JADWAL, MASKAPAI, BANDARA} from '../../action/DataBase';
import searchResultStyle from './SearchResultStyle.js';

const SearchSection = ({dataMaster}) => {
    const {asal, tujuan, tanggal} = dataMaster;
    // const data = JADWAL.filter(item => item.asal === asal && item.tujuan === tujuan && item.tanggal === tanggal);
    const departureId = BANDARA.find(item => item.bandara_nama === asal).bandara_id;
    const arrivalId = BANDARA.find(item => item.bandara_nama === tujuan).bandara_id;
    const searchResult = JADWAL.filter(item => item.bandara_id_keberangkatan === departureId && item.bandara_id_kedatangan === arrivalId && item.tanggal === tanggal);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>sdsad</Text>
            <Text>Details Screen</Text>
            <Text>Asal: {asal}</Text>
            <Text>Tujuan: {tujuan}</Text>
            <Text>Tanggal: {tanggal}</Text>
            <Text>Keberangakatan: {departureId}</Text>
            <Text>Kedatangan: {arrivalId}</Text>
            <Text>Maskapai: {searchResult.values}</Text>
        </View>
    );
};

export default SearchSection;