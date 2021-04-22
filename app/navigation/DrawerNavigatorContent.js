import React, { useState } from 'react'
import { StyleSheet, Text, View, Switch } from 'react-native'
import { Drawer } from 'react-native-paper'
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer'
import {
  MaterialIcons,
  Entypo,
  Ionicons,
  AntDesign,
  Feather,
} from '@expo/vector-icons'
import UserBigHeader from '../components/UserBigHeader'

export default function DrawerNavigatorContent(props) {
  const [isDark, setIsDark] = useState(false)
  return (
    <View style={{ flex: 1, backgroundColor: '#B7CFDC' }}>
      <DrawerContentScrollView {...props}>
        <UserBigHeader />
        <Drawer.Section title=" ">
          <View
            style={{
              flexDirection: 'row',
              display: 'flex',
              justifyContent: 'space-evenly',
            }}
          >
            <Text>Dark Theme</Text>
            <Switch
              trackColor={{ false: '#9DBACA', true: '#fff' }}
              thumbColor={isDark ? '#9DBACA' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setIsDark(!isDark)}
              value={isDark}
              disabled={false}
            />
          </View>
        </Drawer.Section>
        <Drawer.Section>
          <DrawerItem
            label="Main"
            icon={() => <AntDesign name="book" size={24} color="black" />}
            onPress={() => {
              props.navigation.navigate('MainScreen')
            }}
          />
          <DrawerItem
            label="Prifile"
            icon={() => (
              <Ionicons
                name="chatbox-ellipses-outline"
                size={24}
                color="black"
              />
            )}
            onPress={() => {
              props.navigation.navigate('ProfileScreen')
            }}
          />
          <DrawerItem
            label="Settings"
            icon={() => <Feather name="settings" size={24} color="black" />}
            onPress={() => {
              props.navigation.navigate('SettingsScreen')
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  head: {
    backgroundColor: 'green',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
