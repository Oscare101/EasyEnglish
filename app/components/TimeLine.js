import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function Header() {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.timeLineWrapper}>
        <View style={styles.middleLine}></View>

        <View style={styles.box}>
          <View style={styles.date}>
            <Text>20</Text>
            <Text>DEC</Text>
          </View>
          <View style={styles.boxContent}></View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  timeLineWrapper: {
    width: 1000,
    height: 200,
    margin: 50,
    backgroundColor: 'blue',
  },
  middleLine: {
    position: 'absolute',
    width: '100%',
    height: 5,
    top: '50%',
    // transform: translateY(-50%),
    backgroundColor: '#d9d9d9',
  },
})
