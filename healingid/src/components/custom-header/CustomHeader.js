import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import customHeaderStyle from './CustomHeaderStyle';

const CustomHeader = () => {

    return (
        <View
            style={customHeaderStyle.headerContainer}
        >
            <Icon 
                style={customHeaderStyle.menuIcon}
                name="menu" 
                color="#fff"
            />
            <Icon 
                style={customHeaderStyle.userIcon}
                name="user" 
                color="#fff"
            />
        </View>
    );
};

export default CustomHeader;