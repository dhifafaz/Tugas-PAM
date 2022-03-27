import React from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';
import berandaStyles from './BerandaStyles';
import TicketForm from '../../components/TicketForm/TicketForm';

const BerandaScreen = ({navigation}) => {

    return (
        
        <View 
            style={berandaStyles.container}
        >
            <TicketForm navigation={navigation}/>
        </View>

    );
};

export default BerandaScreen;