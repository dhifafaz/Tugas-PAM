import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
    Modal,
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native';
import informasiPemesananStyle from './InformasiPemesananStyle';
import rincianTiketStyle from '../RincianTiket/RincianTiketStyle';
import Invoice from '../../components/Invoice/Invoice';
import ticketFormStyles from '../../components/TicketForm/TicketFormStyles';
import bottBarStyle from '../../components/BottomBar/BottomBarStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Harga } from '../../static-db/data';

const InformasiPemesanan = ({ route, navigation, onChangeText }) => {
    const { data } = route.params;
    
    const [identitas, setIdentitas] = useState({
        uniqId: '',
        nama: '',
        kelamin: '',
        umur: '',
        harga: '',
    });

    function createId() {
        return Math.floor(Date.now() * Math.random());
    }

    const pesanan = {...data, ...identitas};

    console.log(pesanan);

    const [modalVisible, setModalVisible] = useState(false);

    const handleTextChanges = (mytextname) => {
        return (val) => {
            setIdentitas({ ...identitas, [mytextname]: val });
            console.log(identitas);
        }
    }

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('pesanan-rev1', jsonValue)
        } catch (e) {
            console.log(error);
        }
        console.log(value);
        console.log("Done!");
    }

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
        const id = createId();
        setIdentitas({...identitas, uniqId: id});
    }

    useEffect(() => {
        onScreenLoad();
    }, [])

    const historyOrder = [...retrieveData];
    // historyOrde = retrieveData;
    historyOrder.push(pesanan); 

    console.log("Ini history order" );
    console.log(historyOrder);

    return(
        <ScrollView contentContainerStyle={informasiPemesananStyle.mainContainer}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <TouchableWithoutFeedback 
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <View style={bottBarStyle.centeredView}>
                        <View style={ticketFormStyles.modalChoise}>
                            <View 
                                style={ticketFormStyles.headerModalContainer}
                            >
                                <Text 
                                    style={ticketFormStyles.modalTitle}
                                >
                                    Pembayaran
                                </Text>
                            </View>
                            
                            <View
                                style={informasiPemesananStyle.modalBodyContainer}
                            >
                                <Text style={informasiPemesananStyle.titleText}>
                                    Pembayaran dapat dilakukan melalui transfer bank ke rekening berikut
                                </Text>
                                <Text style={informasiPemesananStyle.titleText}>
                                    119140047
                                </Text>
                                <Text style={informasiPemesananStyle.titleText}>
                                    a.n. Dhifaf Athiyah Zhabiyan
                                </Text>
                                <Text style={informasiPemesananStyle.titleText}>
                                    BANK CIHUY
                                </Text>

                                <Pressable
                                    onPress={()=> {
                                        storeData(historyOrder);
                                        setTimeout(() => {
                                            setModalVisible(!modalVisible);
                                            navigation.navigate('Daftar Pesanan');
                                        }, 500);
                                        
                                    }}
                                    style={informasiPemesananStyle.nextButtonText}
                                >
                                    <Text style={rincianTiketStyle.nextButtonText}>
                                        Selesai
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
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

                        <Text style={ticketFormStyles.inputLabel    }>
                            Nama Lengkap
                        </Text>
                        <TextInput
                            placeholder='Masukkan Nama Lengkap'
                            placeholderTextColor="black"
                            onChangeText={handleTextChanges('nama')}
                            style={informasiPemesananStyle.formInput}>
                        </TextInput>

                        <Text style={ticketFormStyles.inputLabel    }>
                            Jenis Kelamin
                        </Text>
                        <TextInput
                            placeholder='Jenis Kelamin'
                            placeholderTextColor="black"
                            onChangeText={handleTextChanges('kelamin')}
                            style={informasiPemesananStyle.formInput}>

                        </TextInput>

                        <Text style={ticketFormStyles.inputLabel    }>
                            Umur
                        </Text>
                        <TextInput
                            placeholder='Umur Anda'
                            placeholderTextColor="black"
                            onChangeText={handleTextChanges('umur')}
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
                            onPress={() => {
                                setModalVisible(true);
                                setTimeout(() => {
                                    const price = Harga.find((subItem) => subItem.kelas === data.kelas).harga;
                                    setIdentitas({...identitas, harga: price});
                                }, 500);
                            }}
                            
                        >
                            <Text style={rincianTiketStyle.nextButtonText}>
                                Submit
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default InformasiPemesanan;