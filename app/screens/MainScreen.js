import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import text from '../../text.json'
import Header from '../components/Header'
import UserBigHeader from '../components/UserBigHeader'
import NavigateItemBlock from '../components/NavigateItemBlock'
import LevelTest from './LevelTest'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Main = ({ navigation }) => {
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
      <Header first="Easy" second="English" />
      <UserBigHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingVertical: 10 }}
      >
        <TouchableOpacity>
          <NavigateItemBlock
            title={text.intermediate.title}
            description={text.intermediate.description}
            progress={+text.intermediate.progress}
            star={text.intermediate.star}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <NavigateItemBlock
            title={text.upperintermediate.title}
            description={text.upperintermediate.description}
            progress={+text.upperintermediate.progress}
            star={text.upperintermediate.star}
          />
        </TouchableOpacity>

        <View
          style={{
            width: width * 0.9,
            height: 2,
            backgroundColor: '#385E72',
            alignSelf: 'center',
            marginVertical: 10,
            borderRadius: 5,
          }}
        ></View>
        <TouchableOpacity>
          <NavigateItemBlock
            title={text.irregularverbs.title}
            description={text.irregularverbs.description}
            progress={+text.irregularverbs.progress}
            star={text.irregularverbs.star}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <NavigateItemBlock
            title={text.phrasalverbs.title}
            description={text.phrasalverbs.description}
            progress={+text.phrasalverbs.progress}
            star={text.phrasalverbs.star}
          />
        </TouchableOpacity>
      </ScrollView>
      <View>
        <Text style={styles.question}>Don't know your English level?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LevelTest')}>
          <View style={styles.testView}>
            <Text style={styles.testTitle}>Level test</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Stack = createStackNavigator()

export default function MainScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" headerMode="none">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="LevelTest" component={LevelTest} />
      </Stack.Navigator>
    </NavigationContainer>
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
