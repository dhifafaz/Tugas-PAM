import React, { useState } from "react";
import { 
    Alert, 
    Modal, 
    Text,  
    View,
    TouchableWithoutFeedback,
    Pressable,
} from "react-native";
import BerandaScreen from '../../screen/Beranda/Beranda'
import PesananScreen from '../../screen/Pesanan/Pesanan'
import PembatalanScreen from '../../screen/Pembatalan/Pembatalan'
import LainnyaScreen from '../../screen/Lainnya/Lainnya'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import bottBarStyle from './BottomBarStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Tab = createBottomTabNavigator();

const BottomBar = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <NavigationContainer>
            <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
            >
                <TouchableWithoutFeedback 
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <View style={bottBarStyle.centeredView}>
                        <View style={bottBarStyle.modalView}>
                            <Text 
                                style={bottBarStyle.modalTitle}
                            >
                                Menu
                            </Text>
                            <Pressable
                                onPress={()=> alert("Coming Soon")} 
                                style={bottBarStyle.modalItem}
                            >
                                <FontAwesome5 
                                    name="search" 
                                    style={bottBarStyle.iconStyle} 
                                    color="gray"
                                />
                                <Text 
                                    style={bottBarStyle.menuName}
                                >
                                    Cek Pemesanan
                                </Text>
                            </Pressable>
                            <Pressable 
                                onPress={()=> alert("Coming Soon")}
                                style={bottBarStyle.modalItem}
                            >
                                <FontAwesome5 
                                    name="user-alt" 
                                    style={bottBarStyle.iconStyle} 
                                    color="green"
                                />
                                <Text 
                                    style={bottBarStyle.menuName}
                                >
                                    Detail Profil
                                </Text>
                            </Pressable>
                            <Pressable 
                                onPress={()=> alert("Coming Soon")}
                                style={bottBarStyle.modalItem}
                            >
                                <FontAwesome5 
                                    name="phone-alt" 
                                    style={bottBarStyle.iconStyle} 
                                    color="red"
                                />
                                <Text 
                                    style={bottBarStyle.menuName}
                                >
                                    Hubungi Kami
                                </Text>
                            </Pressable>
                            <Pressable 
                                onPress={()=> alert("Coming Soon")}
                                style={bottBarStyle.modalItem}
                            >
                                <FontAwesome5 
                                    name="book" 
                                    style={bottBarStyle.iconStyle} 
                                    color="orange"
                                />
                                <Text 
                                    style={bottBarStyle.menuName}
                                >
                                    Riwayat Pemesanan
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            
            </Modal>
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
					} else if (route.name === 'Daftar Pesanan') {
						iconName = focused 
						? 'md-bookmarks' 
						: 'md-bookmarks-outline';
						iconSize = focused ? 30 : 25;
					} else if (route.name === 'Daftar Pembatalan') {
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
				name="Daftar Pesanan" 
				component={PesananScreen} />
			<Tab.Screen 
				name="Daftar Pembatalan" 
				component={PembatalanScreen} />
			<Tab.Screen 
				options={{headerShown: false}}
				name="Lainnya" 
                listeners={() => ({
                    tabPress: (e) => {
                        e.preventDefault();
                        // alert('Lainnya');
                        // navigation.navigate('CustomModal');
                        setModalVisible(true);
                        // focused = true;
                    },
                })}
				component={LainnyaScreen} />
		</Tab.Navigator>
        </NavigationContainer>
    );
};

export default BottomBar;