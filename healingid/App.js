/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import globalStyles from './src/assets/styles/globalStyles';
import MainForm from './src/components/main-form/MainForm';
// import CustomHeader from './src/components/custom-header/CustomHeader';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const App: () => Node = () => {
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
            {/* <CustomHeader/> */}
            <View
                style={globalStyles.background}>
                <View 
                    style={globalStyles.appsContent}
                >
                    <Text style={globalStyles.titleText}>
                        Healing.ID    
                    </Text>
                    <MainForm/>
                </View>
            </View>
            
            </ScrollView>
        </SafeAreaView>
    );
};


export default App;
