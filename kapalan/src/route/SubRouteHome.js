import React from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BerandaScreen from '../screen/Beranda/Beranda';
import RincianTiket from '../screen/RincianTiket/RincianTiket';
import InformasiPemesanan from '../screen/InformasiPemesanan/InformasiPemesanan';

const Stack = createNativeStackNavigator();

const SubRouteHome = () => {
    return (
        <Stack.Navigator initialRouteName='Beranda' screenOptions={{headerShown: false}} >
            <Stack.Screen name="SubBeranda" component={BerandaScreen} />
            <Stack.Screen name="Rincian" component={RincianTiket} />
            <Stack.Screen name="InformasiPemesanan" component={InformasiPemesanan} />
        </Stack.Navigator>

    );
};

export default SubRouteHome;