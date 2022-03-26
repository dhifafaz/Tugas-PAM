import React, {useState, useEffect} from 'react';
import {
    Text,
    View,
    FlatList,
    Pressable,
} from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import pesananStyles from './PesananStyles';
import rincianTiketStyle from '../RincianTiket/RincianTiketStyle';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Harga } from '../../static-db/data';

const PesananScreen = () => {
    const [retrieveData, setRetrieveData] = useState([]);
    
    const getData = async key => {
        try {
            const data = await AsyncStorage.getItem(key);
            if (data !== null) {
                console.log(data);
                const jsonValue = JSON.parse(data);
                setRetrieveData(jsonValue);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const onScreenLoad = () => {
        getData('pesanan-rev1');
    }

    useEffect(() => {
        onScreenLoad();
    }, [])



    return (
        <View
            contentInsetAdjustmentBehavior="automatic"
            style={{
                paddingTop: 25,
                paddingLeft: 25,
                paddingRight: 25,
            }}
        >
            <FlatList
                data={retrieveData}
                renderItem={({item}) => (
                    <Pressable style={pesananStyles.rincianTiketInvoice}>
                        <View style={rincianTiketStyle.rowContainer}>
                            <Text style={rincianTiketStyle.pelabuhanText}>
                                {item.asalPelabuhan}
                            </Text>
                            <MaterialIcon
                                name="arrow-right-alt"
                                color="#000"     
                                size={40}      
                            />
                            <Text style={rincianTiketStyle.pelabuhanText}>
                                {item.pelabuhanTujuan}
                            </Text>
                        </View>
                        <View style={rincianTiketStyle.rowContainer}>
                            <View style={rincianTiketStyle.colContainer}>
                                <Text style={rincianTiketStyle.h3Text}>
                                    Jadwal Masuk Pelabuhan
                                </Text>

                                <Text style={rincianTiketStyle.normalText}>
                                    {item.tanggal}
                                </Text>

                                <Text style={rincianTiketStyle.normalText}>
                                    {item.waktu}
                                </Text>

                                <Text style={rincianTiketStyle.h3Text}>
                                    Layanan
                                </Text>

                                <Text style={rincianTiketStyle.normalText}>
                                    {item.kelas}
                                </Text>
                            </View>
                        </View>
                        <View style={{flex:1, flexDirection: 'row', marginTop: 5 }}>
                            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                        </View>
                        <View
                            style={rincianTiketStyle.rowContainer}
                        >
                            <Text style={rincianTiketStyle.layananText}>
                                Dewasa x 1
                            </Text>
                            <Text style={rincianTiketStyle.hargaText}>
                                Rp {item.harga},00
                            </Text>

                        </View>
                    </Pressable>
                )}
                keyExtractor={item => item.uniqId}
            />
        </View>

    );
};

export default PesananScreen;