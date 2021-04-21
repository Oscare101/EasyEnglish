import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Modal,
  Pressable,
  AsyncStorage,
} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import {
  AntDesign,
  Entypo,
  FontAwesome5,
  Foundation,
  FontAwesome,
} from '@expo/vector-icons'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import text from '../../text.json'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function UserBigHeader() {
  const [nameOptionVisible, setNameOptionVisible] = useState(false)
  const [questionVisible, setQuestionVisible] = useState(false)
  const [inputName, setInputName] = useState('')
  const [userName, setUserName] = useState('User Name')
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={nameOptionVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ width: width * 0.7, height: 100 }}>
              <TextInput
                placeholder="Enter your name"
                onChangeText={(text) => setInputName(text)}
                style={styles.input}
              />
              <View
                style={{ flexDirection: 'row', justifyContent: 'space-around' }}
              >
                <Pressable
                  style={[styles.button, styles.buttonCancel]}
                  onPress={() => setNameOptionVisible(false)}
                >
                  <Text style={styles.textCancel}>Cancel</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonSave]}
                  onPress={() => {
                    if (inputName.trim()) {
                      setUserName(inputName)
                    }

                    setNameOptionVisible(false)
                  }}
                >
                  <Text style={styles.textSave}>Save</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <Modal animationType="slide" transparent={true} visible={questionVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ width: width * 0.8 }}>
              <Text style={{ fontSize: 16 }}>
                <FontAwesome5 name="user-circle" size={16} color="black" /> To
                change your name just tap on your name in header and write new
                one{'\n'}
                {'\n'}
                <Foundation name="checkbox" size={16} color="black" /> If you
                want to check your English level press button at the bottom
                {'\n'}
                {'\n'}
                <FontAwesome name="line-chart" size={16} color="black" /> After
                passing every each lesson or test you will get point and update
                your level
              </Text>
              <View
                style={{ flexDirection: 'row', justifyContent: 'space-around' }}
              >
                <Pressable
                  style={[styles.button, styles.buttonCancel]}
                  onPress={() => setQuestionVisible(false)}
                >
                  <Text style={styles.textCancel}>Ok</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.userInfo}>
        <View style={{ flexDirection: 'row' }}>
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
            <TouchableOpacity onPress={() => setNameOptionVisible(true)}>
              <View
                style={{
                  width: width * 0.5,
                  height: 35,
                  overflow: 'hidden',
                  flexWrap: 'nowrap',
                }}
              >
                <Text style={styles.userName}>{userName}</Text>
              </View>
            </TouchableOpacity>

            <Text>{text.user.days} days learning in a row</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => setQuestionVisible(true)}>
          <AntDesign
            name="questioncircleo"
            size={24}
            color="#385E72"
            style={{ padding: 25 }}
          />
        </TouchableOpacity>
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
    justifyContent: 'space-between',
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
    fontSize: 24,
    textShadowColor: '#aaa',
    textShadowOffset: { x: 1, y: 1 },
    textShadowRadius: 5,
    flexWrap: 'nowrap',
  },
  nameDaysBlock: {
    padding: 10,
    paddingRight: 0,
    alignItems: 'flex-start',
    justifyContent: 'center',
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
  },
  buttonCancel: {
    backgroundColor: '#DCF1FD',
  },
  buttonSave: {
    backgroundColor: '#6AABD2',
  },
  textSave: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textCancel: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    padding: 5,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderColor: '#444',
    marginBottom: 20,
  },
})
