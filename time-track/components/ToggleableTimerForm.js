import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import TimerForm from './TimerForm'
import TimerButton from './TimerButton'

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10
  },
  buttonPadding: {
    paddingHorizontal: 15
  }
})

const ToggleableTimerForm = ({ onFormSubmit }) => {
  const [isOpen, setOpen] = useState(false)

  const openForm = () => setOpen(true)
  const closeForm = () => setOpen(false)

  const handleFormSubmit = timer => {
    closeForm()
    onFormSubmit(timer)
  }

  const { container, buttonPadding } = styles
  return (
    <View style={[container, !isOpen && buttonPadding]}>
      {isOpen ? (
        <TimerForm onFormClose={closeForm} onFormSubmit={handleFormSubmit} />
      ) : (
        <TimerButton title='+' color='black' onPress={openForm} />
      )}
    </View>
  )
}

export default ToggleableTimerForm
