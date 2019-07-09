import React, { useState } from 'react'
import { Image, StyleSheet, View, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'

import AuthorRow from './AuthorRow'

const Card = ({ fullName, image, linkText, onPressLinkText }) => {
  const [loading, setLoading] = useState(true)

  const finishLoading = () => setLoading(false)

  const { imageStyle } = styles

  return (
    <View>
      <AuthorRow
        fullName={fullName}
        linkText={linkText}
        onPressLinkText={onPressLinkText}
      />
      <View style={imageStyle}>
        {loading && (
          <ActivityIndicator style={StyleSheet.absoluteFill} size='large' />
        )}
        <Image
          source={image}
          onLoad={finishLoading}
          style={StyleSheet.absoluteFill}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    aspectRatio: 1,
    backgroundColor: 'rgba(0,0,0,0.02)'
  }
})

Card.propTypes = {
  fullName: PropTypes.string.isRequired,
  image: Image.propTypes.source.isRequired,
  linkText: PropTypes.string,
  onPressLinkText: PropTypes.func
}

Card.defaultProps = {
  linkText: '',
  onPressLinkText: () => {}
}

export default Card
