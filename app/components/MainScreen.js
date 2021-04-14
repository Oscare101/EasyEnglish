import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { AntDesign } from '@expo/vector-icons'
import Header from './Header'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <LinearGradient
        colors={['#007EA7', '#00A7E1']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: height,
        }}
        start={{ x: 1, y: 0 }}
      ></LinearGradient>
      <Header />
      <View style={styles.userInfo}>
        <View style={styles.userProgressIcon}>
          <AnimatedCircularProgress
            size={80}
            width={30}
            fill={70}
            tintColor="#00e0ff"
            // onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#00000000"
          />
          <View style={styles.userIconFloat}>
            <AntDesign name="user" size={40} color="black" />
          </View>
        </View>
        <View style={styles.nameDaysBlock}>
          <Text style={styles.userName}>UserName</Text>
          <Text>4 days of learning</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingTop: 30,
  },
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
  },
  nameDaysBlock: {
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
})
