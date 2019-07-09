import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TextInput, View } from 'react-native'

const CommentInput = ({ onSubmit, placeholder }) => {
  const [text, setText] = useState('')
  const { container, input } = styles

  const handleChangeText = text => setText(text)

  const handleSubmit = () => {
    if (!text) return

    onSubmit(text)
    setText('')
  }

  return (
    <View style={container}>
      <TextInput
        style={input}
        value={text}
        placeholder={placeholder}
        underlineColorAndroid='transparent'
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    paddingHorizontal: 20,
    height: 60
  },
  input: {
    flex: 1
  }
})

CommentInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
}

CommentInput.defaultProps = {
  placeholder: ''
}

export default CommentInput
