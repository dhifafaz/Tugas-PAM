
import React from 'react';
import {
	View,
	Text,
} from 'react-native';
import BerandaScreen from './src/screen/Beranda/Beranda';
import PesananScreen from './src/screen/Pesanan/Pesanan';
import PembatalanScreen from './src/screen/Pembatalan/Pembatalan';
import LainnyaScreen from './src/screen/Lainnya/Lainnya';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const App = () => {

	return (
		<NavigationContainer>
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					let iconSize;
					if (route.name === 'Beranda') {
						iconName = focused
							? 'home'
							: 'home-outline';
						iconSize = focused ? 30 : 25;
					} else if (route.name === 'Pesanan') {
						iconName = focused 
						? 'md-bookmarks' 
						: 'md-bookmarks-outline';
						iconSize = focused ? 30 : 25;
					} else if (route.name === 'Pembatalan') {
						iconName = focused
						? 'close'
						: 'close-outline';
						iconSize = focused ? 30 : 25;
					} else if (route.name === 'Lainnya') {
						iconName = focused
						? 'list'
						: 'list-outline';
						iconSize = focused ? 30 : 25;
					}
					// Return komponen apapun kesini
					return <Ionicons name={iconName} size={iconSize} color={color} />;
				},
				tabBarActiveTintColor: 'orange',
				tabBarInactiveTintColor: 'gray',
				tabBarStyle: {
					height: 60,
				}
			})}
			initialRouteName="Beranda"
		>
			<Tab.Screen 
				options={{headerShown: false}}
				name="Beranda" 
				component={BerandaScreen} />
			<Tab.Screen 
				options={{headerShown: false}}
				name="Pesanan" 
				component={PesananScreen} />
			<Tab.Screen 
				options={{headerShown: false}}
				name="Pembatalan" 
				component={PembatalanScreen} />
			<Tab.Screen 
				options={{headerShown: false}}
				name="Lainnya" 
				component={LainnyaScreen} />
		</Tab.Navigator>
		</NavigationContainer>
	);
};

export default App;
