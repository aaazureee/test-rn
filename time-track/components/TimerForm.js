import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import TimerButton from './TimerButton'

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'white',
    borderColor: '#D6D7DA',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0
  },
  attributeContainer: {
    marginVertical: 8
  },
  textInputContainer: {
    borderColor: '#D6D7DA',
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 5
  },
  textInput: {
    height: 30,
    padding: 5,
    fontSize: 12
  },
  textInputTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

const TimerForm = ({ id, title, description, onFormSubmit, onFormClose }) => {
  const [form, setForm] = useState({
    title: id ? title : '',
    description: id ? description : ''
  })

  const {
    formContainer,
    attributeContainer,
    textInputTitle,
    textInputContainer,
    textInput,
    buttonGroup
  } = styles

  const handleSubmit = () => {
    const { title, description } = form

    onFormSubmit({
      id,
      title,
      description
    })
  }

  const submitText = id ? 'Update' : 'Create'

  return (
    <View style={formContainer}>
      <View style={attributeContainer}>
        <Text style={textInputTitle}>Title</Text>
        <View style={textInputContainer}>
          <TextInput
            style={textInput}
            underlineColorAndroid='transparent'
            value={form.title}
            onChangeText={title => setForm({ ...form, title })}
            autoFocus
          />
        </View>
      </View>

      <View style={attributeContainer}>
        <Text style={textInputTitle}>Description</Text>
        <View style={textInputContainer}>
          <TextInput
            style={textInput}
            underlineColorAndroid='transparent'
            value={form.description}
            onChangeText={description => setForm({ ...form, description })}
          />
        </View>
      </View>

      <View style={buttonGroup}>
        <TimerButton
          small
          color='#21BA45'
          title={submitText}
          onPress={handleSubmit}
        />
        <TimerButton
          small
          color='#DB2828'
          title='Cancel'
          onPress={onFormClose}
        />
      </View>
    </View>
  )
}

TimerForm.defaultProps = {
  id: null,
  title: '',
  description: ''
}

export default TimerForm
