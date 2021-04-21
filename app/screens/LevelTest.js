import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ProgressBarAndroid,
  Modal,
  Pressable,
  SafeAreaView,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AnimatedCircularProgress } from 'react-native-circular-progress'

import AnimateNumber from 'react-native-animate-number'

import Header from '../components/Header'
import text from '../../text.json'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function LevelTest({ navigation }) {
  const [index, setIndex] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [checked, setChecked] = useState('')
  const [backModalVisible, setBackModalVisible] = useState(false)
  const [notifyVisible, setNotifyVisible] = useState(true)
  const [point, setPoint] = useState(0)

  const Explanation = () => {
    if (checked == text.leveltest[index].answer) {
      return (
        <View style={[styles.explanationBlock, { backgroundColor: '#CBFFD7' }]}>
          <Text style={[styles.explanationText, { color: '#247045' }]}>
            <AntDesign name="circledowno" size={24} color="#247045" />
            {'\n'}
            {text.leveltest[index].explanation}
          </Text>
        </View>
      )
    } else {
      return (
        <View style={[styles.explanationBlock, { backgroundColor: '#FFB1B4' }]}>
          <Text style={[styles.explanationText, { color: '#740000' }]}>
            <AntDesign name="close" size={24} color="#740000" />
            {'\n'}
            {text.leveltest[index].explanation}
          </Text>
        </View>
      )
    }
  }

  const AfterAnswer = () => {
    if (!answered) {
      return false
    } else {
      return (
        <>
          <Explanation />
          <TouchableOpacity
            onPress={() => {
              setIndex(index + 1)
              setAnswered(false)
            }}
          >
            <View style={styles.next}>
              <Text style={styles.nextText}>Next</Text>
            </View>
          </TouchableOpacity>
        </>
      )
    }
  }

  const Test = () => {
    if (index == text.leveltest.length) {
      return (
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text>Good Boy</Text>
          <View style={{ width: 200, height: 200, alignSelf: 'center' }}>
            <AnimatedCircularProgress
              lineCap="butt"
              size={200}
              width={50}
              fill={(point / text.leveltest.length) * 100}
              tintColor="#CBFFD7"
              backgroundColor="#FFB1B4"
            >
              {(fill) => (
                <Text style={{ fontSize: 26 }}>
                  <AnimateNumber
                    value={((point / text.leveltest.length) * 100).toFixed(0)}
                    interval={10}
                    countBy={1}
                  />{' '}
                  %
                </Text>
              )}
            </AnimatedCircularProgress>
          </View>
          <View style={{ position: 'absolute', bottom: 20 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Main')
              }}
            >
              <View style={styles.next}>
                <Text style={styles.nextText}>To main screen</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.test}>
          <View style={styles.task}>
            <Text style={styles.taskText}>
              {index + 1}. {text.leveltest[index].task}
            </Text>
          </View>
          <View style={styles.sentence}>
            <Text style={styles.sentenceText}>
              {text.leveltest[index].sentence}
            </Text>
          </View>
          <View style={styles.answers}>
            <TouchableOpacity
              disabled={answered}
              onPress={() => {
                setChecked(text.leveltest[index].A)
                setAnswered(true)
                if (text.leveltest[index].A == text.leveltest[index].answer) {
                  setPoint(point + 1)
                }
              }}
            >
              <View style={styles.variantBlock}>
                <Text style={styles.variant}>{text.leveltest[index].A}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.answers}>
            <TouchableOpacity
              disabled={answered}
              onPress={() => {
                setChecked(text.leveltest[index].B)
                setAnswered(true)
                if (text.leveltest[index].B == text.leveltest[index].answer) {
                  setPoint(point + 1)
                }
              }}
            >
              <View style={styles.variantBlock}>
                <Text style={styles.variant}>{text.leveltest[index].B}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.answers}>
            <TouchableOpacity
              disabled={answered}
              onPress={() => {
                setChecked(text.leveltest[index].C)
                setAnswered(true)
                if (text.leveltest[index].C == text.leveltest[index].answer) {
                  setPoint(point + 1)
                }
              }}
            >
              <View style={styles.variantBlock}>
                <Text style={styles.variant}>{text.leveltest[index].C}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.answers}>
            <TouchableOpacity
              disabled={answered}
              onPress={() => {
                setChecked(text.leveltest[index].D)
                setAnswered(true)
                if (text.leveltest[index].D == text.leveltest[index].answer) {
                  setPoint(point + 1)
                }
              }}
            >
              <View style={styles.variantBlock}>
                <Text style={styles.variant}>{text.leveltest[index].D}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <AfterAnswer />
        </View>
      )
    }
  }

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={notifyVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ width: width * 0.8 }}>
              <Text style={{ fontSize: 16 }}>
                This is level English test{'\n'}It has no time limit you can
                pass it in your own temp{'\n'}Answers cannot be changed be
                careful
              </Text>
              <View
                style={{ flexDirection: 'row', justifyContent: 'space-around' }}
              >
                <Pressable
                  style={[styles.button, styles.buttonCancel]}
                  onPress={() => setNotifyVisible(false)}
                >
                  <Text style={styles.textCancel}>Ok</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
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
      <Header first="Level" second="Test" />
      <ProgressBarAndroid
        color="#F8EA55"
        styleAttr="Horizontal"
        indeterminate={false}
        progress={index / text.leveltest.length}
        style={{ width: width * 0.9, paddingTop: 30 }}
      />
      <View style={{ position: 'absolute', top: 40, right: 30 }}>
        <TouchableOpacity onPress={navigation.goBack}>
          <AntDesign name="closecircleo" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <Test />
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
  test: { paddingTop: 0, alignSelf: 'center' },
  task: {},
  taskText: {
    fontSize: 20,
  },
  sentence: {},
  sentenceText: {
    fontSize: 22,
  },
  answers: {},
  variantBlock: {
    borderWidth: 1,
    borderColor: '#444',
    margin: 5,
    width: width * 0.9,
    padding: 15,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#D9E4EC',
  },
  variant: {
    fontSize: 20,
  },
  next: {
    backgroundColor: '#385E72',
    width: width * 0.9,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'center',
  },
  nextText: {
    color: '#fff',
    fontSize: 24,
  },
  explanationBlock: {
    width: width * 0.9,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'center',
    marginTop: 5,
  },
  explanationText: {
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 25,

    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: '40%',
    alignItems: 'center',
  },
  buttonCancel: {
    backgroundColor: '#DCF1FD',
  },
  buttonSave: {
    backgroundColor: '#6AABD2',
  },
})
