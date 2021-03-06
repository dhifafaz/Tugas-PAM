import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native';
import {
    JADWAL, 
    MASKAPAI, 
    BANDARA} from '../../action/DataBase';
import searchResultStyle from './SearchResultStyle.js';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SearchSection = ({dataMaster}) => {
    const {asal, tujuan, tanggal} = dataMaster;

    // console.log(searchResult);

    const DataNotFound = () => {
        return (
            <View style={searchResultStyle.itemContainer}>
                <Text style={searchResultStyle.textDanger}>
                    Maaf data tidak ditemukan, silahkan cek kembali lokasi keberangkatan, dan tujuan anda!
                </Text>
            </View>
        )
    };

    const DataFound = (searchResult) => {
        
        return (
            <FlatList
                data={searchResult}
                renderItem={({item}) => (

                    <TouchableOpacity 
                        style={searchResultStyle.itemContainer}
                    >
                        <View 
                            style={searchResultStyle.itemContent}
                        >
                            <View 
                                style={searchResultStyle.rowContainer}
                            >
                                <View
                                    style={searchResultStyle.imageContainer} 
                                >
                                    <Image 
                                        source={MASKAPAI.find(subItem => subItem.maskapai_id === item.maskapai_id).maskapai_logo} 
                                        style={searchResultStyle.image}
                                    />
                                </View>
                                <View
                                    style={searchResultStyle.columnContainer}
                                >
                                    <View
                                        style={searchResultStyle.rowContainer}
                                    >
                                        <Text 
                                            style={searchResultStyle.bandara}
                                        >
                                            {BANDARA.find(subItem => subItem.bandara_id === item.bandara_id_keberangkatan).bandara_nama}
                                        </Text>

                                        <MaterialIcons
                                            name="arrow-right-alt"
                                            color="#000"     
                                            size={20}      
                                        />
                                        <Text 
                                            style={searchResultStyle.bandara}
                                        >
                                            {BANDARA.find(subItem => subItem.bandara_id === item.bandara_id_kedatangan).bandara_nama}
                                        </Text>
                                    </View>

                                    <View
                                        style={searchResultStyle.rowContainer}
                                    >
                                        <Text 
                                            style={searchResultStyle.maskapai}
                                        >
                                            {MASKAPAI.find(subItem => subItem.maskapai_id === item.maskapai_id).maskapai_nama}
                                        </Text>
                                        
                                        <Text 
                                            style={searchResultStyle.tanggal}
                                        >
                                                {item.tanggal}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.jadwal_id}
            />
        );
    };

    function RenderData() {
        if (asal !== '' || tujuan !== '' || tanggal !== '') {
            const departureId = BANDARA.filter(
                item => item.bandara_nama.toLowerCase().replace(/\s/g, '') 
                === asal.toLowerCase().replace(/\s/g, '')
            );                
            const arrivalId = BANDARA.filter(
                item => item.bandara_nama.toLowerCase().replace(/\s/g, '') 
                === tujuan.toLowerCase().replace(/\s/g, '')
            );
            // console.log(departureId);
            // console.log(arrivalId);

            if (departureId != "" && arrivalId != "") {
                const depId = departureId[0].bandara_id;
                const arrId = arrivalId[0].bandara_id;
                // console.log("masuk");
                const searchResult = JADWAL.filter(
                    item => item.bandara_id_keberangkatan.toLowerCase().replace(/\s/g, '') 
                    === depId.toLowerCase().replace(/\s/g, '') && item.bandara_id_kedatangan.toLowerCase().replace(/\s/g, '') 
                    === arrId.toLowerCase().replace(/\s/g, '') && item.tanggal === tanggal
                );
                // console.log(searchResult);
                if (searchResult.length == "") {
                    return (
                        <View style={searchResultStyle.itemContainer}>
                            <Text style={searchResultStyle.textDanger}>
                                Maaf data tidak ditemukan, tidak ada penerbangan yang tersedia pada tanggal tersebut.
                                Silahkan pilih tanggal keberangkatan lain...
                            </Text>
                        </View>
                    );
                }
                return DataFound(searchResult);
                
            };
            return DataNotFound();
        };
        return DataNotFound();
    };


    return (
        <View style={searchResultStyle.resultContainer}>
            <RenderData/>
                <Text style={searchResultStyle.copyRight}>
                    Copyright by Dhifaf @ 119140047
                </Text>
        </View>
    );
};

export default SearchSection;
