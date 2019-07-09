import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import TimerButton from './TimerButton'

import { millisecondsToHuman } from '../utils/TimerUtils'

const Timer = ({
  id,
  title,
  description,
  isRunning,
  elapsed,
  onEditPress,
  onRemovePress,
  onStartPress,
  onStopPress
}) => {
  const elapsedString = millisecondsToHuman(elapsed)
  const { timerContainer, titleText, elapsedTime, buttonGroup } = styles

  const renderActionButton = () => {
    if (isRunning) {
      return (
        <TimerButton
          color='#DB2828'
          title='Stop'
          onPress={() => onStopPress(id)}
        />
      )
    }

    return (
      <TimerButton
        color='#21BA45'
        title='Start'
        onPress={() => onStartPress(id)}
      />
    )
  }

  return (
    <View style={timerContainer}>
      <Text style={titleText}>{title}</Text>
      <Text>{description}</Text>
      <Text style={elapsedTime}>{elapsedString}</Text>
      <View style={buttonGroup}>
        <TimerButton color='blue' small title='Edit' onPress={onEditPress} />
        <TimerButton
          color='blue'
          small
          title='Remove'
          onPress={() => onRemovePress(id)}
        />
      </View>
      {renderActionButton()}
    </View>
  )
}

const styles = StyleSheet.create({
  timerContainer: {
    backgroundColor: 'white',
    borderColor: '#d6d7da',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  elapsedTime: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 15
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default Timer
