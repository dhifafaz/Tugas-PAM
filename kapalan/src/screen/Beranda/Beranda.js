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
            <Text>Beranda</Text>
            <TicketForm/>
                <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>

    );
};

export default BerandaScreen;