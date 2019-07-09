import React from 'react'
import { ColorPropType, StyleSheet, View, Text } from 'react-native'
import PropTypes from 'prop-types'

const Avatar = ({ initials, size, backgroundColor }) => {
  const { containerStyle, textStyle } = styles

  const avatarStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor
  }

  return (
    <View style={[containerStyle, avatarStyle]}>
      <Text style={textStyle}>{initials}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    color: 'white'
  }
})

Avatar.propTypes = {
  initials: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  backgroundColor: ColorPropType.isRequired
}

export default Avatar
