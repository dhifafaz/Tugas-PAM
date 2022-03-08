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

const HasilPage = ({ route, navigation }) => {
    const { data } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>Asal: {data.asal}</Text>
        <Text>Tujuan: {data.tujuan}</Text>
        <Text>Tanggal: {data.tanggal}</Text>
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