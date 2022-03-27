import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PesananScreen from '../screen/Pesanan/Pesanan';
import DetailPesanan from '../screen/DetailPesanan/DetailPesanan';

const Stack = createNativeStackNavigator();

const SubRoutePesanan = () => {
    return (
        <Stack.Navigator initialRouteName='SubPesanan' screenOptions={{headerShown: false}} >
            <Stack.Screen name="SubPesanan" component={PesananScreen} />
            <Stack.Screen name="DetailPesanan" component={DetailPesanan} />
        </Stack.Navigator>

    );
};

export default SubRoutePesanan;