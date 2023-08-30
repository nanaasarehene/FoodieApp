import React from 'react';
import {View, Text, Images, TouchableOpacity} from 'react-native';
import {
  CreateDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {MainLayout} from '../screens';
import {COLORS, FONTS, SIZES, constant, icons, dummyData} from '../constants';

const Drawer = CreateDrawerNavigator();

const CuspableDrawer = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}>
      <Drawer.Navigator>
        drawerType="slide" overlayColor="transparent" drawerStyle=
        {{
          flex: 1,
          width: '65%',
          paddingRight: 20,
          backgroundColor: 'transparent',
        }}
        scebeContainerStyle=
        {{
          backgroundColor: 'transparent',
        }}
        initialRouteName= "MainLayout"
        <Drawer.Screen name="MainLayout">
          {props => <MainLayout {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CuspableDrawer;
