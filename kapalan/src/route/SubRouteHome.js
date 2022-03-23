import React from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BerandaScreen from '../screen/Beranda/Beranda';

const Stack = createNativeStackNavigator();

function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
            title="Go to Details... again"
            onPress={() => navigation.push('Beranda')}
        />
        </View>
    );
}

const SubRouteHome = () => {
    return (
        <Stack.Navigator initialRouteName='Beranda' screenOptions={{headerShown: false}} >
            <Stack.Screen name="Beranda" component={BerandaScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>

    );
};

export default SubRouteHome;