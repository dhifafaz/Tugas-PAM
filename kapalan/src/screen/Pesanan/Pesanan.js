import React, {useState, useEffect} from 'react';
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
import pesananStyles from './PesananStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PesananScreen = () => {
    const [retrieveData, setRetrieveData] = useState([]);
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    // let readData = async () => {
    //     try{  
    //         let fetchPemesanan = await AsyncStorage.getItem('pesanan');
    //         let parsedPemesanan = fetchPemesanan != null ? JSON.parse(fetchPemesanan) : null;
    //         setRetrieveData(parsedPemesanan);
    //         console.log("Berhjasill")
    //         console.log(fetchPemesanan);
    //     }  
    //     catch(e){  
    //         alert(e)  
    //     }
    //     readData();
    // }

    useEffect(() => {
        const storage = async()=>{
            let items = await AsyncStorage.getItem('pesanan');
            let parsedItems = items != null ? JSON.parse(items) : null;
            setRetrieveData(parsedItems);
            console.log(items)
        }
        storage()
    }, []);
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
                <View style={{
                    flex:1,
                    height: '100%',
                }}>
                    <Text
                        style={{
                            marginTop: 20,
                            color: "black",
                            fontSize: 20,
                            fontWeight: "bold",
                        }}
                    >{retrieveData.nama}</Text>
                    <Text
                        style={{
                            marginTop: 20,
                            color: "black",
                            fontSize: 20,
                            fontWeight: "bold",
                        }}
                    >{retrieveData.kelas}</Text>
                    <Text
                        style={{
                            marginTop: 20,
                            color: "black",
                            fontSize: 20,
                            fontWeight: "bold",
                        }}
                    >{retrieveData.asalPelabuhan}</Text>
                    <Text
                        style={{
                            marginTop: 20,
                            color: "black",
                            fontSize: 20,
                            fontWeight: "bold",
                        }}
                    >{retrieveData.uniqId}</Text>
                </View>
            </View>
        </ScrollView>
        </SafeAreaView>
    );
};

export default PesananScreen;