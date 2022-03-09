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
    BANDARA
} from '../../action/DataBase';
import searchResultStyle from './SearchResultStyle.js';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SearchSection = ({dataMaster}) => {
    const {asal, tujuan, tanggal} = dataMaster;

    // console.log(searchResult);

    const DataNotFound = () => {
        return (
            <View style={searchResultStyle.itemContainer}>
                <Text style={searchResultStyle.text}>
                    Maaf data tidak ditemukan, silahkan cek kembali lokasi keberangkatan, tujuan, dan tanggal keberangkatan anda!
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
        if (asal === '' || tujuan === '' || tanggal === '') {
            return DataNotFound();
        } else {
            const departureId = BANDARA.find(item => item.  bandara_nama.toLowerCase() === asal.toLowerCase()).bandara_id;

            const arrivalId = BANDARA.find(item => item.bandara_nama.toLowerCase() === tujuan.toLowerCase()).bandara_id;

            const searchResult = JADWAL.filter(item => item.bandara_id_keberangkatan.toLowerCase() === departureId.toLowerCase() && item.bandara_id_kedatangan.toLowerCase() === arrivalId.toLowerCase() && item.tanggal === tanggal);
            
            // console.log(searchResult);
            
            let renderedItem = (searchResult.length>0) ? DataFound(searchResult) : DataNotFound();

            return renderedItem;
        }
    }

    return (
        <View style={searchResultStyle.resultContainer}>
            <RenderData/>
        </View>
    );
};

export default SearchSection;