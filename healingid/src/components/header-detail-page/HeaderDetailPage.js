import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import headerDetailPageStyle from './HeaderDetailPageStyle';

const HeaderDetailPage = ({ navigation }) => {

    return (
        <View 
            style={headerDetailPageStyle.headerContainer}
        >
            <View
                style={headerDetailPageStyle.rowContainer}
            >
                <TouchableOpacity title="Go back" onPress={() => navigation.goBack()}>
                    <MaterialIcons 
                        style={headerDetailPageStyle.backIcon}
                        name="arrow-back" 
                        color="#fff"
                    />
                </TouchableOpacity>
                <Text 
                    style={headerDetailPageStyle.headerTitle}            
                >
                    Healing.ID
                </Text>
                <Feather 
                    style={headerDetailPageStyle.userIcon}
                    name="user" 
                    color="#fff"
                />
            </View>
            <View 
                style={headerDetailPageStyle.columnContainer}
            >
                <Text style={headerDetailPageStyle.bodyText}>
                    Hasil Pencarian
                    
                </Text>
                <Text style={headerDetailPageStyle.bodyText}>
                    (Tanggal Keberangakatan)
                </Text>
            </View>
        </View>
    );
};

export default HeaderDetailPage;