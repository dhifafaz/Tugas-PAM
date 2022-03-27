import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import rincianTiketStyle from '../../screen/RincianTiket/RincianTiketStyle';
import { Harga } from '../../static-db/data';

const Invoice = ({data}) => {
    return (
        <View style={rincianTiketStyle.rincianTiketInvoice}>
            <View style={rincianTiketStyle.rowContainer}>
                <Text style={rincianTiketStyle.pelabuhanText}>
                    {data.asalPelabuhan}
                </Text>
                <MaterialIcon
                    name="arrow-right-alt"
                    color="#000"     
                    size={40}      
                />
                <Text style={rincianTiketStyle.pelabuhanText}>
                    {data.pelabuhanTujuan}
                </Text>
            </View>
            <View style={rincianTiketStyle.rowContainer}>
                <View style={rincianTiketStyle.colContainer}>
                    <Text style={rincianTiketStyle.h3Text}>
                        Jadwal Masuk Pelabuhan
                    </Text>

                    <Text style={rincianTiketStyle.normalText}>
                        {data.tanggal}
                    </Text>

                    <Text style={rincianTiketStyle.normalText}>
                        {data.waktu}
                    </Text>

                    <Text style={rincianTiketStyle.h3Text}>
                        Layanan
                    </Text>

                    <Text style={rincianTiketStyle.normalText}>
                        {data.kelas}
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
                    Rp {Harga.find((subItem) => subItem.kelas === data.kelas).harga},00
                </Text>

            </View>
        </View>
    );
};

export default Invoice;