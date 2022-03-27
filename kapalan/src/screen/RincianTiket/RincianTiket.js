import React from 'react';
import {
    Text,
    View,
    Button,
    ScrollView,
    Pressable,
} from 'react-native';
import rincianTiketStyle from './RincianTiketStyle';
import ticketFormStyles from '../../components/TicketForm/TicketFormStyles';
import { Harga, Jadwal } from '../../static-db/data';
import Invoice from '../../components/Invoice/Invoice';
import Fontisto from 'react-native-vector-icons/Fontisto';

const RincianTiket = ({ route, navigation })=> {
    const { data  } = route.params;

    const DataNotFound = () => {
        return (
            <View style={rincianTiketStyle.itemContainer}>
                <Fontisto 
                    style={{
                        fontSize: 200,
                        padding: 10,
                        alignContent: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        textAlign: 'center',
                    }} 
                    name="ship" color="orange"
                />
                <Text style={rincianTiketStyle.textDanger}>
                    Maaf data tidak ditemukan, silahkan cek kembali lokasi keberangkatan, dan tujuan anda!
                </Text>
            </View>
        )
    };

    const DataFound = (searchResult) => {
        // console.log(searchResult);

        return(
            <View style={rincianTiketStyle.rincianCard}>
                <View style={rincianTiketStyle.rincianCardHeader}>
                    <Text 
                        style={ticketFormStyles.headerText}
                    >
                        Kapalan
                    </Text>
                    <Text 
                        style={rincianTiketStyle.titleText}
                    >
                        Kuota tersedia ({searchResult.kuota})
                    </Text>
                    <Text 
                        style={rincianTiketStyle.titleText}
                    >
                        Rincian Tiket
                    </Text>

                    <Invoice data={searchResult}/>
                    
                    <View 
                        style={rincianTiketStyle.rowContainer}
                    >
                        <Text style={rincianTiketStyle.totalText}>
                            Total
                        </Text>
                        <Text style={rincianTiketStyle.totalText}>
                            Rp {Harga.find((subItem) => subItem.kelas === searchResult.kelas).harga},00
                        </Text>
                    </View>
                    <View style={rincianTiketStyle.rowContainer}>
                    <Pressable
                        style={rincianTiketStyle.backButton}
                        onPress={() => navigation.goBack()}
                        
                    >
                        <Text style={rincianTiketStyle.backButtonText}>
                            Kembali
                        </Text>
                    </Pressable>

                    <Pressable
                        style={rincianTiketStyle.nextButton}
                        onPress={() => navigation.navigate('InformasiPemesanan', {data: searchResult})}
                        
                    >
                        <Text style={rincianTiketStyle.nextButtonText}>
                            Lanjutkan
                        </Text>
                    </Pressable>
                    </View>
                </View>
            </View>
        );
    };

    function RenderData() {
        if (data.asal !== '' || data.tujuan !== '' || data.tanggal !== '' || data.layanan !== '' || data.waktu !== '') {
            const searchResult = Jadwal.filter(
                item => item.asalPelabuhan === data.asal && item.pelabuhanTujuan 
                === data.tujuan && item.tanggal === data.tanggal && item.kelas 
                === data.layanan && item.waktu === data.waktu
            );
            // console.log(searchResult);
            if (searchResult.length == "") {
                return (
                    <View style={rincianTiketStyle.itemContainer}>
                        <Fontisto 
                            style={{
                                fontSize: 200,
                                padding: 10,
                                alignContent: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                textAlign: 'center',
                            }} 
                            name="ship" color="orange"
                        />
                        <Text style={rincianTiketStyle.textDanger}>
                            Maaf jadwal tidak ditemukan, tidak ada pelayaran yang tersedia.
                            Silahkan pilih parameter keberangkatan lain...
                        </Text>
                    </View>
                );
            }
            return DataFound(searchResult[0]);
        };
        return DataNotFound();
    };

    // console.log(route.params);
    console.log(data.asal);


    return (
        <ScrollView contentContainerStyle={rincianTiketStyle.mainContainer}>
            <RenderData/>
        </ScrollView>
    );
};

export default RincianTiket;
