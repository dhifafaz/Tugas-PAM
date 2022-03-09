/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import HomePage from './src/layouts/HomePage';
import HasilPage from './src/layouts/HasilPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
const Stack = createNativeStackNavigator();

const App: () => Node = () => {

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
