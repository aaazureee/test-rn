import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

import Avatar from './Avatar'
import getAvatarColor from '../utils/getAvatarColor'
import getInitials from '../utils/getInitials'

const AuthorRow = ({ fullName, linkText, onPressLinkText }) => {
  const { containerStyle, textStyle, linkTextStyle } = styles

  return (
    <View style={containerStyle}>
      <Avatar
        initials={getInitials(fullName)}
        size={35}
        backgroundColor={getAvatarColor(fullName)}
      />
      <Text style={textStyle} numberOfLines={1}>
        {fullName}
      </Text>
      <TouchableOpacity onPress={onPressLinkText} activeOpacity={0.5}>
        <Text numberOfLines={1}>{linkText}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10
    // borderColor: 'black',
    // borderWidth: 1
  },
  textStyle: {
    flex: 1,
    marginHorizontal: 6
    // borderColor: 'pink',
    // borderWidth: 1
  }
})

AuthorRow.propTypes = {
  fullName: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  onPressLinkText: PropTypes.func.isRequired
}

export default AuthorRow
