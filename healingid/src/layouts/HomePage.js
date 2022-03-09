import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    View,
    useColorScheme,
} from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import globalStyles from '../assets/styles/GlobalStyles';
import MainForm from '../components/main-form/MainForm';
import CustomHeader from '../components/custom-header/CustomHeader';

const HomePage = ({navigation}) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                contentContainerStyle={globalStyles.mainContainer}
            >
            
                <View
                    style={globalStyles.background}
                >
                    <CustomHeader/>
                    <View 
                        style={globalStyles.appsContent}
                    >
                        <Text style={globalStyles.titleText}>
                            Healing.ID    
                        </Text>
                        <MainForm navigation={navigation}/>
                    </View>
                </View>
                
            </ScrollView>
            
        </SafeAreaView>
        
    );
};

export default HomePage;