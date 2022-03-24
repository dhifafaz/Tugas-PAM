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
import {Pelabuhan} from '../../static-db/data';

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
                                    Menu
                                </Text>
                            </View>
                            
                            <View
                                style={ticketFormStyles.modalChoiseContainer}
                            >
                                <FlatList
                                    data={Pelabuhan}
                                    renderItem={({item}) => (
                                        <Pressable
                                            onPress={()=> {
                                                const target = props.targets;
                                                if (target == 'asal') {
                                                    props.onChangeText({ ...props.text, asal: item.namaPelabuhan });
                                                } else {
                                                    props.onChangeText({ ...props.text, tujuan: item.namaPelabuhan });
                                                }
                                                props.closeModal();
                                                
                                            }}
                                            style={ticketFormStyles.choiseContainer}
                                        >   
                                            <Text
                                                style={ticketFormStyles.choiseLokasiText}
                                            >
                                                {item.namaPelabuhan}
                                            </Text>
                                            <Text
                                                style={ticketFormStyles.choisePelabuhanText}
                                            >
                                                {item.namaPelabuhan}
                                            </Text>
                                        </Pressable>
                                    )}
                                    keyExtractor={item => item.idPelabuhan}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
    );
};

export default ModalHarbour;