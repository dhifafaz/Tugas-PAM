import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {JADWAL, MASKAPAI, BANDARA} from '../action/DataBase'
import globalStyles from '../assets/styles/globalStyles';

const HasilPage = ({ route, navigation }) => {
    const { data } = route.params;
    return (
        // <SafeAreaView style={backgroundStyle}>
        //     <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            
        //     <ScrollView
        //         contentInsetAdjustmentBehavior="automatic"
        //         contentContainerStyle={globalStyles.mainContainer}
        //     >
            
        //         <View
        //             style={globalStyles.background}
        //         >
        //             <CustomHeaderBack/>
        //             <View 
        //                 style={globalStyles.appsContent}
        //             >
                    
        //             </View>
        //         </View>
                
        //     </ScrollView>
            
        // </SafeAreaView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>Asal: {data.asal}</Text>
        <Text>Tujuan: {data.tujuan}</Text>
        <Text>Tanggal: {data.tanggal}</Text>
        <Text>Maskapai: {MASKAPAI[0].maskapai_nama}</Text>
        <Button
            title="Go to Details... again"
            onPress={() =>
            navigation.push('Details', {
                itemId: Math.floor(Math.random() * 100),
            })
            }
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('HomePage')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
};

export default HasilPage;