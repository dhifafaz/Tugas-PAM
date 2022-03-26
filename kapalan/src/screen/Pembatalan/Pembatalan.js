import React, {useState, useEffect} from 'react';
import {
    Text,
    Pressable,
    View,
    FlatList,
} from 'react-native';
import pesananStyles from '../Pesanan/PesananStyles';
import rincianTiketStyle from '../RincianTiket/RincianTiketStyle';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import pembatalanStyles from './PembatalanStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PembatalanScreen = () => {
    const [retrieveData, setRetrieveData] = useState([]);

    const getData = async () => {
        try {
            const data = await AsyncStorage.getItem('pesanan-rev1');
            if (data !== null) {
                console.log(data);
                const jsonValue = JSON.parse(data);
                setRetrieveData(jsonValue);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);



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
                    <Pressable 
                        onPress={() => navigation.navigate('DetailPesanan', {data: item.uniqId})}
                        style={pesananStyles.rincianTiketInvoice}>
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

export default PembatalanScreen;