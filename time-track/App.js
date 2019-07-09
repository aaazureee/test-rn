import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native'
import Constants from 'expo-constants'
import EditableTimer from './components/EditableTimer'
import ToggleableTimerForm from './components/ToggleableTimerForm'

import uuidv4 from 'uuid/v4'
import { newTimer } from './utils/TimerUtils'

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  },
  titleContainer: {
    paddingTop: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D7DA'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  timerList: {
    paddingBottom: 15
  },
  statusBarUnderlay: {
    backgroundColor: 'white',
    height: Constants.statusBarHeight,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  }
})

const timerData = [
  {
    title: 'Study',
    description: 'Daily study',
    id: uuidv4(),
    elapsed: 5456099,
    isRunning: true
  },
  {
    title: 'Baking',
    description: 'Kitchen chores',
    id: uuidv4(),
    elapsed: 1273998,
    isRunning: false
  },
  {
    title: 'Laundry',
    description: 'Household chores',
    id: uuidv4(),
    elapsed: 938432,
    isRunning: false
  }
]

const App = () => {
  const [state, setState] = useState(timerData)
  const TIME_INTERVAL = 1000

  useEffect(() => {
    const interval = setInterval(() => {
      setState(state =>
        state.map(timer => {
          const { elapsed, isRunning } = timer

          return {
            ...timer,
            elapsed: isRunning ? elapsed + TIME_INTERVAL : elapsed
          }
        })
      )
    }, TIME_INTERVAL)

    return () => clearInterval(interval)
  }, [])

  const handleCreateForm = timer => {
    setState(state => [newTimer(timer), ...state])
  }

  const handleEditForm = newTimer => {
    setState(state =>
      state.map(timer => {
        if (timer.id === newTimer.id) {
          const { title, description } = newTimer

          return { ...timer, title, description }
        }

        return timer
      })
    )
  }

  const handleRemovePress = timerId => {
    setState(state => state.filter(timer => timer.id !== timerId))
  }

  const toggleTimer = timerId => {
    setState(state =>
      state.map(timer => {
        const { id, isRunning } = timer

        if (id === timerId) {
          return {
            ...timer,
            isRunning: !isRunning
          }
        }

        return timer
      })
    )
  }

  const { appContainer, title, titleContainer, timerList } = styles
  return (
    <View style={appContainer}>
      <View style={titleContainer}>
        <Text style={title}>Timers</Text>
      </View>

      <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
        <ScrollView
          contentContainerStyle={timerList}
          keyboardShouldPersistTaps='always'
        >
          <ToggleableTimerForm onFormSubmit={handleCreateForm} />
          {state.map(({ id, title, description, elapsed, isRunning }) => (
            <EditableTimer
              key={id}
              id={id}
              title={title}
              description={description}
              elapsed={elapsed}
              isRunning={isRunning}
              onFormSubmit={handleEditForm}
              onRemovePress={handleRemovePress}
              onStartPress={toggleTimer}
              onStopPress={toggleTimer}
            />
          ))}
        </ScrollView>
      </KeyboardAvoidingView>
      {/* <View style={styles.statusBarUnderlay} /> */}
    </View>
  )
}

export default App
