import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    Button,
    Pressable
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import BarcodeStyles from './BarcodeStyle';
import { StatusBar } from 'expo-status-bar';

export default function BarcodeComponent() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [content, setContent] = useState('Belum di scan');
    
    const askForPermission = () => {
        (
            async () => {
                const { status } = await BarCodeScanner.requestPermissionsAsync();
                setHasPermission(status === 'granted');
            }
        )();
    };

    useEffect(() => {
        askForPermission();
    }, []);

    const handleBarcodeScanned = ({ type, data }) => {
        setScanned(true);
        setContent(data);
        console.log(`Barcode dengan tipe ${type} dan datanya ${data} telah berhasil di scan!`);
    };

    if (hasPermission === null) {
        return(
            <View style={BarcodeStyles.container}>
                <Text style={BarcodeStyles.mainText}>Meminta izin untuk mengakses kamera...</Text>
            </View>
        );
    }

    if (hasPermission === false) {
        return(
            <View style={BarcodeStyles.container}>
                <Text style={BarcodeStyles.mainText}>Izin untuk mengakses kamera ditolak!</Text>
                <Button
                    title={"Izinkan Kamera"}
                    onPress={() => askForPermission()}
                />
            </View>
        );
    }


    return (
        <View style={BarcodeStyles.container}>
            {/* <Text>Open up App.js to  ceki ceki rted sdstart dhifaf on your app!</Text>
            <StatusBar style="auto" />
            <BarCodeScanner/> */}
            <View style={BarcodeStyles.boxBarcode}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarcodeScanned}
                    style={{
                        height: 450,
                        width: 500,
                    }}
                />
            </View>
            <View 
                style={BarcodeStyles.contentArea}
            >
                <Text style={BarcodeStyles.title}>
                    Berikut adalah pesan rahasianya
                </Text>
                <Text 
                    style={BarcodeStyles.text}
                >
                        {content}
                </Text>
            </View>
            {scanned && 
                <Pressable
                    onPress={() => setScanned(false)}
                    style={BarcodeStyles.button}
                >
                <Text style={BarcodeStyles.buttonText}>
                    Klik jika ingin membaca pesan dalam barcode lainnya
                </Text>
                </Pressable>
            }
        </View>
    );
}