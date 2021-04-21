import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        Easy <Text style={styles.dark}>English</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 30,
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
