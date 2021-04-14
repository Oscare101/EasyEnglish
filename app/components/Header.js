import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Easy English</Text>
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
  },
})
