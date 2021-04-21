import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { AntDesign } from '@expo/vector-icons'
import text from '../../text.json'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function UserBigHeader() {
  return (
    <View style={styles.userInfo}>
      <View style={styles.userProgressIcon}>
        <AnimatedCircularProgress
          lineCap="round"
          size={80}
          width={5}
          fill={+text.user.progress}
          tintColor="#385E72"
          backgroundColor="#00000000"
        />
        <View style={styles.userIconFloat}>
          <AntDesign name="user" size={40} color="black" />
        </View>
      </View>
      <View style={styles.nameDaysBlock}>
        <Text style={styles.userName}>{text.user.name}</Text>
        <Text>{text.user.days} days learning in a row</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  userInfo: {
    width: width,
    height: 80,
    flexDirection: 'row',
    paddingLeft: 20,
  },
  userProgressIcon: {
    width: 80,
    height: 80,
  },
  userIconFloat: {
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    margin: 5,
  },
  userName: {
    color: '#fff',
    fontSize: 25,
    textShadowColor: '#aaa',
    textShadowOffset: { x: 1, y: 1 },
    textShadowRadius: 5,
  },
  nameDaysBlock: {
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
})
