import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import detailPesananStyles from './PembatalanStyles';

const DetailPesanan = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
            <View
                style={{
                backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
                <View>
                    <Text>DetailPesanan</Text>
                </View>
            </View>
        </ScrollView>
        </SafeAreaView>
    );
};

export default DetailPesanan;