import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import MainScreen from '../screens/MainScreen'
import ProfileScreen from '../screens/ProfileScreen'
import DrawerNavigatorContent from './DrawerNavigatorContent'
import SettingsScreen from '../screens/SettingsScreen'
const Drawer = createDrawerNavigator()

export default function DrawerScreen() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="MainScreen"
        drawerContent={(props) => <DrawerNavigatorContent {...props} />}
      >
        <Drawer.Screen name="MainScreen" component={MainScreen} />
        <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
