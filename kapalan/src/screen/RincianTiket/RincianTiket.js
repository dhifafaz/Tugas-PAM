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
import { Harga } from '../../static-db/data';
import Invoice from '../../components/Invoice/Invoice';

const RincianTiket = ({ route, navigation })=> {
    const { data } = route.params;

    const DataNotFound = () => {
        return (
            <View style={rincianTiketStyle.itemContainer}>
                <Text style={rincianTiketStyle.textDanger}>
                    Maaf data tidak ditemukan, silahkan cek kembali lokasi keberangkatan, dan tujuan anda!
                </Text>
            </View>
        )
    };

    const DataFound = (searchResult) => {

        return(
            <View style={rincianTiketStyle.rincianCard}>
                <View style={rincianTiketStyle.rincianCardHeader}>
                    <Text 
                        style={ticketFormStyles.headerText}
                    >
                        Kapalan
                    </Text>
                    <Text 
                        style={rincianTiketStyle.normalText}
                    >
                        Kuota tersedia (10000)
                    </Text>
                    <Text 
                        style={rincianTiketStyle.normalText}
                    >
                        Rincian Tiket
                    </Text>

                    <Invoice data={data}/>
                    
                    <View 
                        style={rincianTiketStyle.rowContainer}
                    >
                        <Text style={rincianTiketStyle.totalText}>
                            Total
                        </Text>
                        <Text style={rincianTiketStyle.totalText}>
                            Rp {Harga.find((subItem) => subItem.kelas === data.layanan).harga},00
                        </Text>
                    </View>
                    <View style={rincianTiketStyle.rowContainer}>
                    <Pressable
                        style={rincianTiketStyle.backButton}
                        title="Go to Details... again"
                        onPress={() => navigation.goBack()}
                        
                    >
                        <Text style={rincianTiketStyle.backButtonText}>
                            Kembali
                        </Text>
                    </Pressable>

                    <Pressable
                        style={rincianTiketStyle.nextButton}
                        title="Go to Details... again"
                        onPress={() => navigation.navigate('Pemesanan', {data: data})}
                        
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

    return (
        <ScrollView contentContainerStyle={rincianTiketStyle.mainContainer}>
            <DataFound/>
        </ScrollView>
    );
};

export default RincianTiket;
