import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        {props.first} <Text style={styles.dark}>{props.second}</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    textShadowColor: '#aaa',
    textShadowOffset: { x: 1, y: 1 },
    textShadowRadius: 5,
    textDecorationStyle: 'solid',
    textDecorationColor: '#222',
    textDecorationLine: 'underline',
  },
  dark: {
    color: '#385E72',
  },
})
