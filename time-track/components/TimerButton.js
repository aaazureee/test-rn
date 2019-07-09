import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    minWidth: 100,
    borderWidth: 2,
    borderRadius: 3
  },
  smallText: {
    fontSize: 14,
    padding: 5
  },
  largeText: {
    fontSize: 16,
    padding: 10
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

const TimerButton = ({ color, title, small, onPress }) => {
  const { button, buttonText, smallText, largeText } = styles

  return (
    <TouchableOpacity
      style={[button, { borderColor: color }]}
      onPress={onPress}
      activeOpacity={0.5}
    >
      <Text style={[buttonText, small ? smallText : largeText, { color }]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default TimerButton
