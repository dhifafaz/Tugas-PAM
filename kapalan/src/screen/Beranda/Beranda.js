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
// import berandaStyles from './BerandaStyles';

const BerandaScreen = () => {
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
                    <Text>Beranda</Text>
                </View>
            </View>
        </ScrollView>
        </SafeAreaView>
    );
};

export default BerandaScreen;