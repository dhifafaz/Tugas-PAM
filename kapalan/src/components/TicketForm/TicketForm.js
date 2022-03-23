import React, { useState } from 'react';
import {
    View,
    Text,
    Pressable,
    Button,
    TextInput,
    KeyboardAvoidingView,
} from 'react-native';
import ticketFormStyles from './TicketFormStyles';
import Fontisto from 'react-native-vector-icons/Fontisto';


const TicketForm = ({navigation}) => {
    const [text, onChangeText] = useState({
        asal: '',
        tujuan: '',
        tanggal: '',
    });

    const handleTextChanges = (mytextname) => {
        return (val) => {
            onChangeText({ ...text, [mytextname]: val });
            console.log(text);
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "android" ? "height" : null}
            style={ticketFormStyles.formCard}
        >
            <View 
                style={ticketFormStyles.formCardHeader}
            >
                <Text 
                    style={ticketFormStyles.headerText}
                >
                    Cekkk
                </Text>
            </View>
        
            <Text style={ticketFormStyles.inputLabel}>
                Pilih Pelabuhan  
            </Text>
            <View style={ticketFormStyles.formInput}>
                <Fontisto 
                    style={ticketFormStyles.inputIcon} 
                    name="ship" color="orange"
                />
                <TextInput
                    style={ticketFormStyles.inputText}
                    onChangeText={handleTextChanges('asal')}
                    value={text.asal}
                    placeholder="Masukkan Lokasi Keberangkatan"
                />
            </View>
            <Pressable
                style={ticketFormStyles.button}
                onPress={() => navigation.navigate('Details')}
            >
                <Text 
                    style={ticketFormStyles.buttonText}
                >
                    Cari
                </Text>
            </Pressable>
        </KeyboardAvoidingView>
    );
};

export default TicketForm;