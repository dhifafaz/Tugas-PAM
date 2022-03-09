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
    // const departureId = BANDARA.find(item => item.bandara_nama === asal).bandara_id;
    // const arrivalId = BANDARA.find(item => item.bandara_nama === tujuan).bandara_id;
    const searchResult = JADWAL.filter(item => item.bandara_id_keberangkatan === departureId && item.bandara_id_kedatangan === arrivalId && item.tanggal === tanggal);
    console.log(searchResult);

    const DataNotFound = (asal, tujuan, tanggal) => {

    };

    const DataFound = () => {
        return (
            <FlatList
                data={searchResult}
                renderItem={({item}) => (

                    <View style={searchResultStyle.itemContainer}>
                        <View style={searchResultStyle.itemContent}>
                            <Text style={searchResultStyle.maskapai}>{MASKAPAI.find(subItem => subItem.maskapai_id === item.maskapai_id).maskapai_nama}</Text>
                            <Text style={searchResultStyle.bandara}>{BANDARA.find(subItem => subItem.bandara_id === item.bandara_id_keberangkatan).bandara_nama}</Text>
                            <Text style={searchResultStyle.bandara}>{BANDARA.find(subItem => subItem.bandara_id === item.bandara_id_kedatangan).bandara_nama}</Text>
                            <Text style={searchResultStyle.tanggal}>{item.tanggal}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={item => item.jadwal_id}
            />
        );
    };
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>sdsad</Text>
            <Text>Details Screen</Text>
            <DataFound/>
        </View>
    );
};

export default SearchSection;