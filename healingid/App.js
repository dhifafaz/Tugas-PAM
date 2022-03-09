/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import HomePage from './src/layouts/HomePage';
import HasilPage from './src/layouts/HasilPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
                <Stack.Screen name="HomePage" component={HomePage} />
                <Stack.Screen name="HasilPage" component={HasilPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default App;
