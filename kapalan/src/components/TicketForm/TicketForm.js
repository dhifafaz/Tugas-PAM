import React, { useState, useEffect} from 'react';
import {
    View,
    Text,
    Pressable,
    TextInput,
} from 'react-native';
import ticketFormStyles from './TicketFormStyles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import ModalHarbour from '../CustomModalDropDown/ModalHarbour';
import ModalLayanan from '../CustomModalDropDown/ModalLayanan';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TicketForm = ({navigation}) => {
    moment.updateLocale('en', {
        weekdays : [
            "Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"
        ]
    });
    moment.updateLocale('en', {
        months : [
            "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli",
            "Agustus", "September", "Oktober", "November", "Desember"
        ]
    });
    const [text, onChangeText] = useState({
        asal: '',
        tujuan: '',
        tanggal: '',
        waktu: '',
        layanan: '',
    });

    const handleTextChanges = (mytextname) => {
        return (val) => {
            onChangeText({ ...text, [mytextname]: val });
            // console.log(text);
        }
    }

    const [isPickerDate, setIsPickerDate] = useState(false);
    const [isPickerTime, setIsPickerTime] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));
    const [time, setTime] = useState(new Date(Date.now()));
    const [modalVisibleHarbour, setModalVisibleHarbour] = useState(false);
    const [modalVisibleClass, setModalVisibleClass] = useState(false);
    const [target, setTarget] = useState('');

    const showPickerTime = () => {
        setIsPickerTime(true);
    };

    const showPickerDate = () => {
        setIsPickerDate(true);
    };
    
    const onChangeDate = (event, value) => {
        setIsPickerDate(false);
        onChangeText({ ...text, tanggal: moment.utc(value).locale('en').format('dddd, DD MMMM YYYY') });
        setDate(value);
    };
    const onChangeTime = (event, value) => {
        setIsPickerTime(false);
        onChangeText({ ...text, waktu: moment.utc(value).format('HH:mm') + " " + "WIB" });
        setTime(value);
    };

    const closeModalHarbour = () => {
        setModalVisibleHarbour(!modalVisibleHarbour);
    };

    const closeModalClass = () => {
        setModalVisibleClass(!modalVisibleClass);
    };

    const clearAsyncStorage = async() => {
        AsyncStorage.clear();
    }

    // console.log(text);

    return (
        
        <View
            
            style={ticketFormStyles.formCard}
        >
            <ModalHarbour 
                modalVisible={modalVisibleHarbour} 
                closeModal={closeModalHarbour} 
                text={text} 
                onChangeText={onChangeText}
                targets={target}
            />

            <ModalLayanan 
                modalVisible={modalVisibleClass} 
                closeModal={closeModalClass} 
                text={text} 
                onChangeText={onChangeText}
                targets={target}
            />

            <View 
                style={ticketFormStyles.formCardHeader}
            >
                <Text 
                    style={ticketFormStyles.headerText}
                >
                    Kapalan
                </Text>
            </View>
        
            <Text style={ticketFormStyles.inputLabel}>
                Pilih Pelabuhan Awal  
            </Text>
            <View 
                style={ticketFormStyles.formInput}>
                <Fontisto 
                    style={ticketFormStyles.inputIcon} 
                    name="ship" color="orange"
                />
                <Pressable
                    onPress={() => {
                        setModalVisibleHarbour(true);
                        setTarget('asal');
                    }}
                    style={ticketFormStyles.inputText}
                >
                    <Text
                        style={ticketFormStyles.customPlaceholder}
                    >{text.asal == "" ? "Masukkan Lokasi Keberangkatan" : text.asal}</Text>
                </Pressable>
            </View>

            <Text style={ticketFormStyles.inputLabel}>
                Pilih Pelabuhan Tujuan
            </Text>
            <View 
                style={ticketFormStyles.formInput}>
                <Fontisto 
                    style={ticketFormStyles.inputIcon} 
                    name="ship" color="orange"
                />
                <Pressable
                    onPress={() => {
                        setModalVisibleHarbour(true);
                        setTarget('tujuan');
                        // clearAsyncStorage();
                    }}
                    style={ticketFormStyles.inputText}
                >
                    <Text
                        style={ticketFormStyles.customPlaceholder}
                    >{text.tujuan == "" ? "Masukkan Lokasi Tujuan" : text.tujuan}</Text>
                </Pressable>
            </View>

            <Text style={ticketFormStyles.inputLabel}>
                Kelas Layanan  
            </Text>
            <View style={ticketFormStyles.formInput}>
                <MaterialIcons 
                    style={ticketFormStyles.inputIcon} 
                    name="airline-seat-recline-normal" color="orange"
                />
                <Pressable
                    onPress={() => {
                        setModalVisibleClass(true);
                    }}
                    style={ticketFormStyles.inputText}
                >
                    <Text
                        style={ticketFormStyles.customPlaceholder}
                    >{text.layanan == "" ? "Masukkan Layanan" : text.layanan}</Text>
                </Pressable>
            </View>

            <Text style={ticketFormStyles.inputLabel}>
                Tanggal Masuk Pelabuhan  
            </Text>
            <View style={ticketFormStyles.formDateTime}>
                <Fontisto 
                    onPress={showPickerDate}
                    style={ticketFormStyles.inputIcon} 
                    name="ship" color="orange"
                />
                    {!isPickerDate && (
                        <View style={ticketFormStyles.btnContainer}>
                        </View>
                    )}
                    {isPickerDate && (
                        <DateTimePicker
                            timeZoneOffsetInMinutes={0}
                            value={date}
                            mode={'date'}
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            is24Hour={true}
                            onChange={onChangeDate}
                            style={ticketFormStyles.datePicker}
                        />
                    )}
                    <View 
                        style={ticketFormStyles.pickedDateContainer}
                    >
                        <Text 
                            onPress={showPickerDate} 
                            style={ticketFormStyles.pickedDate}
                        >
                            {text.tanggal == "" ? "Silahkan Pilih Tanggal" : text.tanggal}
                        </Text>
                    </View>
            </View>
            
            <Text style={ticketFormStyles.inputLabel}>
                Waktu Masuk Pelabuhan
            </Text>
            <View style={ticketFormStyles.formDateTime}>
                <Fontisto 
                    onPress={showPickerTime} 
                    style={ticketFormStyles.inputIcon} 
                    name="ship" color="orange"
                />
                    {!isPickerTime && (
                        <View style={ticketFormStyles.btnContainer}>
                        </View>
                    )}
                    {isPickerTime && (
                        <DateTimePicker
                            timeZoneOffsetInMinutes={0}
                            value={time}
                            mode={'time'}
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            is24Hour={true}
                            onChange={onChangeTime}
                            style={ticketFormStyles.datePicker}
                        />
                    )}
                <Pressable 
                    onPress={showPickerTime}
                    style={ticketFormStyles.pickedDateContainer}
                >
                    <Text 
                        onPress={showPickerTime} 
                        style={ticketFormStyles.pickedDate}
                    >
                        {text.waktu == "" ? "Silahkan Pilih Waktu" : text.waktu}
                    </Text>
                </Pressable>
            </View>

            <View 
                style={ticketFormStyles.formInput}
            >
                <View
                    style={ticketFormStyles.rowContainer}
                >
                    <Text
                        style={ticketFormStyles.customPlaceholderPeople}
                    >
                        Dewasa
                    </Text>
                    <Text
                        style={ticketFormStyles.customPlaceholderTotal}
                    >
                        1 Orang
                    </Text>
                </View>
            </View>

            <View style={ticketFormStyles.buttonContainer}>
                <Pressable
                    style={ticketFormStyles.button}
                    onPress={() => navigation.navigate('Rincian', {data: text})}
                >
                    <Fontisto 
                        style={ticketFormStyles.searchIcon} 
                        name="search"
                    />
                    <Text 
                        style={ticketFormStyles.buttonText}
                    >
                        Buat Tiket
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default TicketForm;