import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ProgressBarAndroid,
} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { AntDesign } from '@expo/vector-icons'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function NavigateItemBlock(props) {
  return (
    <View style={styles.block}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.description}>{props.description}</Text>
      <ProgressBarAndroid
        color="#F8EA55"
        styleAttr="Horizontal"
        indeterminate={false}
        progress={props.progress}
        style={{ paddingTop: 10 }}
      />
      {props.star ? (
        <AntDesign name="star" size={24} color="#F8EA55" style={styles.star} />
      ) : (
        <AntDesign name="staro" size={24} color="#999" style={styles.star} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    margin: 5,
    width: width * 0.9,
    height: 90,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#385E72',
    borderRadius: 10,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    textShadowColor: '#bbb',
    textShadowOffset: { x: 1, y: 1 },
    textShadowRadius: 5,
  },
  description: {
    color: '#1E1E1E',
    paddingTop: 3,
  },
  star: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
})
