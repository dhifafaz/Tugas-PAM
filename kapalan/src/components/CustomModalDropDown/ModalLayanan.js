import React, { useState } from 'react';
import {
    Modal,
    Text,
    View,
    Pressable,
    TouchableWithoutFeedback,
    FlatList,
    Alert
} from 'react-native';
import ticketFormStyles from '../TicketForm/TicketFormStyles';
import bottBarStyle from '../BottomBar/BottomBarStyles';
import {Harga} from '../../static-db/data';

const ModalHarbour = (props) => {
    return (
        <Modal
                animationType="fade"
                transparent={true}
                visible={props.modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    props.closeModal();
                }}
            >
                <TouchableWithoutFeedback 
                    onPress={() => props.closeModal()}
                >
                    <View style={bottBarStyle.centeredView}>
                        <View style={ticketFormStyles.modalChoise}>
                            <View 
                                style={ticketFormStyles.headerModalContainer}
                            >
                                <Text 
                                    style={ticketFormStyles.modalTitle}
                                >
                                    Pilihan Kelas Layanan
                                </Text>
                            </View>
                            
                            <View
                                style={ticketFormStyles.modalChoiseContainer}
                            >
                                <FlatList
                                    data={Harga}
                                    renderItem={({item}) => (
                                        <Pressable
                                            onPress={()=> {
                                                props.onChangeText({ ...props.text, layanan: item.kelas });
                                                props.closeModal();
                                                
                                            }}
                                            style={ticketFormStyles.choiseContainer}
                                        >   
                                            <Text
                                                style={ticketFormStyles.choiseText}
                                            >
                                                {item.kelas}
                                            </Text>
                                        </Pressable>
                                    )}
                                    keyExtractor={item => item.idHarga}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
    );
};

export default ModalHarbour;