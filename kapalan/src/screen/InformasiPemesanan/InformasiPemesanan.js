import React, {useState} from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
    ScrollView,
} from 'react-native';
import informasiPemesananStyle from './InformasiPemesananStyle';
import rincianTiketStyle from '../RincianTiket/RincianTiketStyle';
import Invoice from '../../components/Invoice/Invoice';
import ticketFormStyles from '../../components/TicketForm/TicketFormStyles';

const InformasiPemesanan = ({ route, navigation }) => {
    const { data } = route.params;
    const [identitas, setIdentitas] = useState({
        nama: '',
        kelamin: '',
        umur: '',
    });

    return(
        <ScrollView contentContainerStyle={rincianTiketStyle.mainContainer}>
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
                        Informasi Pemesanan
                    </Text>
                    <Invoice data={data}/>
                    <View style={informasiPemesananStyle.columnContainer}>
                        <Text style={rincianTiketStyle.titleText}>
                            Data Pemesan
                        </Text>
                        <Text >
                            Nama Lengkap
                        </Text>
                        <TextInput
                            placeholder='Masukkan Nama Lengkap'
                            placeholderTextColor="black"
                            style={informasiPemesananStyle.formInput}>

                        </TextInput>
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
                            onPress={() => navigation.navigate('InformasiPemesanan', {data: data})}
                            
                        >
                            <Text style={rincianTiketStyle.nextButtonText}>
                                Lanjutkan
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default InformasiPemesanan;