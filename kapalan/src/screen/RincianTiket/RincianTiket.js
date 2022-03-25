import React from 'react';
import {
    Text,
    View,
    Button,
    ScrollView,
} from 'react-native';
import rincianTiketStyle from './RincianTiketStyle';
import ticketFormStyles from '../../components/TicketForm/TicketFormStyles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

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

                    <View style={rincianTiketStyle.rincianTiketInvoice}>
                        <View style={rincianTiketStyle.rowContainer}>
                            <Text style={rincianTiketStyle.pelabuhanText}>
                                {data.asal}
                            </Text>
                            <MaterialIcon
                                name="arrow-right-alt"
                                color="#000"     
                                size={40}      
                            />
                            <Text style={rincianTiketStyle.pelabuhanText}>
                                {data.tujuan}
                            </Text>
                        </View>
                        <View style={rincianTiketStyle.rowContainer}>
                            <View style={rincianTiketStyle.colContainer}>
                                <Text style={rincianTiketStyle.h3Text}>
                                    Jadwal Masuk Pelabuhan
                                </Text>

                                <Text style={rincianTiketStyle.notmalText}>
                                    {data.tanggal}
                                </Text>

                                <Text style={rincianTiketStyle.notmalText}>
                                    {data.waktu}
                                </Text>

                                <Text style={rincianTiketStyle.h3Text}>
                                    Layanan
                                </Text>

                                <Text style={rincianTiketStyle.notmalText}>
                                    {data.layanan}
                                </Text>
                            </View>
                        </View>
                        <View style={{flex:1, height:5, color:"white", borderRadius:10}}>

                        </View>
                        <Text 
                                    style={{fontSize:20, color:'black'}}>
                                    {data.asal + " " + data.tujuan + " " + data.tanggal + " " + data.waktu + " " + data.layanan}
                                </Text>

                    </View>
                <Button
                    title="Go to Details... again"
                    onPress={() => navigation.goBack()}
                />
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
