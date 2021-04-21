import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ProgressBarAndroid,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Header from '../components/Header'
import text from '../../text.json'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function LevelTest({ navigation }) {
  const [progress, setProgress] = useState(0)
  const [index, setIndex] = useState(0)

  const Explanation = () => {
    return (
      <View>
        <Text></Text>
      </View>
    )
  }

  const AfterAnswer = () => {
    return (
      <>
        <Explanation />
        <TouchableOpacity>
          <View style={styles.next}>
            <Text style={styles.nextText}>Next</Text>
          </View>
        </TouchableOpacity>
      </>
    )
  }

  const Test = () => {
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
          <TouchableOpacity>
            <View style={styles.variantBlock}>
              <Text style={styles.variant}>{text.leveltest[index].A}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.answers}>
          <TouchableOpacity>
            <View style={styles.variantBlock}>
              <Text style={styles.variant}>{text.leveltest[index].B}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.answers}>
          <TouchableOpacity>
            <View style={styles.variantBlock}>
              <Text style={styles.variant}>{text.leveltest[index].C}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.answers}>
          <TouchableOpacity>
            <View style={styles.variantBlock}>
              <Text style={styles.variant}>{text.leveltest[index].D}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <AfterAnswer />
      </View>
    )
  }

  return (
    <View style={styles.container}>
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
      <View style={{ position: 'absolute', top: 40, right: 30 }}>
        <TouchableOpacity onPress={navigation.goBack}>
          <AntDesign
            name="closecircleo"
            size={30}
            color="black"
            // style={{ position: 'absolute', top: 20, right: 20 }}
          />
        </TouchableOpacity>
      </View>
      <Test />
      <ProgressBarAndroid
        color="#F8EA55"
        styleAttr="Horizontal"
        indeterminate={false}
        progress={progress}
        style={{ position: 'absolute', bottom: 20, width: width * 0.9 }}
      />
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
  test: { paddingTop: 20 },
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
    marginBottom: 20,
  },
  nextText: {
    color: '#fff',
    fontSize: 24,
  },
})
