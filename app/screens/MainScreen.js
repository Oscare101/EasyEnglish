import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { AntDesign } from '@expo/vector-icons'
import text from '../../text.json'
import Header from '../components/Header'
import UserBigHeader from '../components/UserBigHeader'
import NavigateItemBlock from '../components/NavigateItemBlock'
import { TouchableOpacity } from 'react-native-gesture-handler'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <LinearGradient
        colors={['#D9E4EC', '#B7CFDC']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: height,
        }}
        start={{ x: 0, y: 0 }}
      ></LinearGradient>
      <Header />
      <UserBigHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingVertical: 10 }}
      >
        <NavigateItemBlock
          title={text.intermediate.title}
          description={text.intermediate.description}
          progress={+text.intermediate.progress}
          star={text.intermediate.star}
        />
        <NavigateItemBlock
          title={text.upperintermediate.title}
          description={text.upperintermediate.description}
          progress={+text.upperintermediate.progress}
          star={text.upperintermediate.star}
        />

        <NavigateItemBlock
          title={text.irregularverbs.title}
          description={text.irregularverbs.description}
          progress={+text.irregularverbs.progress}
          star={text.irregularverbs.star}
        />
        <NavigateItemBlock
          title={text.phrasalverbs.title}
          description={text.phrasalverbs.description}
          progress={+text.phrasalverbs.progress}
          star={text.phrasalverbs.star}
        />
      </ScrollView>
      <View>
        <Text style={styles.question}>Don't know your English level?</Text>
        <TouchableOpacity>
          <View style={styles.testView}>
            <Text style={styles.testTitle}>Level test</Text>
          </View>
        </TouchableOpacity>
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
  question: {
    color: '#1E1E1E',
    alignSelf: 'center',
    paddingBottom: 5,
  },
  testView: {
    backgroundColor: '#385E72',
    width: width * 0.9,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  testTitle: {
    color: '#fff',
    fontSize: 24,
  },
})
