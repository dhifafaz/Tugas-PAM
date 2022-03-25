import React from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BerandaScreen from '../screen/Beranda/Beranda';
import RincianTiket from '../screen/RincianTiket/RincianTiket';

const Stack = createNativeStackNavigator();

const SubRouteHome = () => {
    return (
        <Stack.Navigator initialRouteName='Beranda' screenOptions={{headerShown: false}} >
            <Stack.Screen name="SubBeranda" component={BerandaScreen} />
            <Stack.Screen name="Details" component={RincianTiket} />
            <Stack.Screen name="Details" component={RincianTiket} />
        </Stack.Navigator>

    );
};

export default SubRouteHome;