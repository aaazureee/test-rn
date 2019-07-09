import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const NavigationBar = ({ title, leftText, onPressLeftText }) => {
  const { containerStyle, leftTextStyle, titleStyle } = styles

  return (
    <View style={containerStyle}>
      <TouchableOpacity style={leftTextStyle} onPress={onPressLeftText}>
        <Text>{leftText}</Text>
      </TouchableOpacity>
      <Text style={titleStyle}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    height: 40,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftTextStyle: {
    position: 'absolute',
    left: 20,
    justifyContent: 'center'
  },
  titleStyle: {
    fontWeight: '500'
  }
})

NavigationBar.propTypes = {
  title: PropTypes.string,
  leftText: PropTypes.string,
  onPressLeftText: PropTypes.func
}

NavigationBar.defaultProps = {
  title: '',
  leftText: '',
  onPressLeftText: () => {}
}

export default NavigationBar
