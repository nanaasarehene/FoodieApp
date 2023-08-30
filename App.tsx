/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MainLayout from './src/screens/MainLayout';
import CustomDrawer from './src/navigation/CustomDrawer';
import 'react-native-reanimated/plugin';




const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        initialRouteName={'Home'}>

        <Stack.Screen name="Home" component={CustomDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
