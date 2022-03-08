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
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import globalStyles from '../../assets/styles/globalStyles';
import MainForm from '../main-form/MainForm';
import CustomHeader from '../custom-header/CustomHeader';

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