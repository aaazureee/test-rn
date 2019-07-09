import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
    borderRadius: 5
  },
  textInput: {
    flex: 1,
    color: 'white'
  }
})

const SearchInput = ({ placeholder, onSubmit }) => {
  const [text, setText] = useState('')
  const { container, textInput } = styles

  const handleTextChange = typedText => {
    setText(typedText)
  }

  const handleSubmitEditing = () => {
    if (!text) return

    onSubmit(text)
    setText('')
  }

  // console.log('current text', text)

  return (
    <View style={container}>
      <TextInput
        autoCorrect={false}
        value={text}
        placeholder={placeholder}
        placeholderTextColor='rgba(255,255,255, 0.8)'
        underlineColorAndroid='transparent'
        style={textInput}
        clearButtonMode='always'
        onChangeText={handleTextChange}
        onSubmitEditing={handleSubmitEditing}
      />
    </View>
  )
}

SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

SearchInput.defaultProps = {
  placeholder: ''
}

export default SearchInput
