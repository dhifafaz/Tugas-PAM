import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    useColorScheme,
    View,
    Pressable,
    Modal,
    TouchableWithoutFeedback
} from 'react-native';
import detailPesananStyles from './DetailPesananStyle';
import rincianTiketStyle from '../RincianTiket/RincianTiketStyle';
import ticketFormStyles from '../../components/TicketForm/TicketFormStyles';
import Invoice from '../../components/Invoice/Invoice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetailPesanan = ({route, navigation}) => {
    const items = route.params.data
    console.log(items);
    const [modalVisible, setModalVisible] = useState(false);

    const [retrieveData, setRetrieveData] = useState([]);

    const getData = async () => {
        try {
            const data = await AsyncStorage.getItem('pesanan-rev1');
            if (data !== null) {
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

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('pesanan-rev1', jsonValue)
        } catch (error) {
            console.log(error);
        }
        console.log("Done!");
    };

    console.log(retrieveData);

    const displayDetail = () => {
        const foundObject = retrieveData.filter ( (item) => {
            return(
                item.uniqId === items
            )
        })
    
        const cancelSchedule = retrieveData.map(
            (item) => {
                if (item.uniqId === items) {
                    item.status = 'dibatalkan';
                }
                return item;
            }
        )
    
        if (foundObject.length > 0) {
            return (
                <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={{
                    paddingTop: 25,
                    paddingLeft: 25,
                    paddingRight: 25,
                }}
            >
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
                        <View style={detailPesananStyles.centeredView}>
                            <View style={detailPesananStyles.modalCard}>
                                <Text 
                                    style={detailPesananStyles.modalText}
                                >
                                    Apakah kamu yakin ingin membatalkan pesanan ?
                                </Text>
                                <Pressable
                                    onPress={()=> setModalVisible(!modalVisible)} 
                                    style={detailPesananStyles.modalItemYes}
                                >
                                    <Text 
                                        style={detailPesananStyles.menuName}
                                    >
                                        Tidak
                                    </Text>
                                </Pressable>
                                <Pressable 
                                    onPress={()=> {
                                        cancelSchedule;
                                        storeData(cancelSchedule);
                                        setModalVisible(!modalVisible);
                                        navigation.navigate('Daftar Pembatalan');
                                    }}
                                    style={detailPesananStyles.modalItem}
                                >
                                    <Text 
                                        style={detailPesananStyles.menuName}
                                    >
                                        Iya
                                    </Text>
                                </Pressable> 
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
                <View style={rincianTiketStyle.rincianCard}>
                    <View style={rincianTiketStyle.rincianCardHeader}>
                        <Text 
                            style={ticketFormStyles.headerText}
                        >
                            Detail Tiket Kapal
                        </Text>
                        <Text 
                            style={rincianTiketStyle.titleText}
                        >
                            Kuota tersedia ({foundObject[0].kuota})
                        </Text>
                        <Text 
                            style={rincianTiketStyle.titleText}
                        >
                            Rincian Tiket
                        </Text>
    
                        <Invoice data={foundObject[0]}/>
                        
                        <View 
                            style={rincianTiketStyle.colContainer}
                        >
                            <Text
                                style={detailPesananStyles.titleTextIdentity}
                            >
                                Nama Lengkap
                            </Text>
    
                            <Text
                                style={detailPesananStyles.textIdentity}
                            >
                                {foundObject[0].nama}
                            </Text>
    
                            <Text
                                style={detailPesananStyles.titleTextIdentity}
                            >
                                Jenis Kelamin
                            </Text>
    
                            <Text
                                style={detailPesananStyles.textIdentity}
                            >
                                {foundObject[0].kelamin}
                            </Text>
    
                            <Text
                                style={detailPesananStyles.titleTextIdentity}
                            >
                                Umur
                            </Text>
    
                            <Text
                                style={detailPesananStyles.textIdentity}
                            >
                                {foundObject[0].umur}
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
                                style={detailPesananStyles.cancelButton}
                                // onPress={() => navigation.navigate('InformasiPemesanan', {data: item})}
                                onPress={() => setModalVisible(true)}
                            >
                                <Text style={detailPesananStyles.cancelButtonText}>
                                    Cancel
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>
            );
        } else {

        }
    }

    return (
        <View>
            {displayDetail()}
        </View>
    );
};

export default DetailPesanan;