import React, { useState } from 'react';
import {
    View,
    Text,
    Pressable,
    TextInput,
} from 'react-native';
import ticketFormStyles from './TicketFormStyles';

const TicketForm = () => {
    return (
        <View style={ticketFormStyles.formCard}>
            <View style={ticketFormStyles.formCardHeader}>
                <Text style={ticketFormStyles.headerText}>
                    Cekkk
                </Text>
            </View>
        </View>

    );
};

export default TicketForm;