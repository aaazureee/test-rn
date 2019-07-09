import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, StyleSheet, View, Text } from 'react-native'

const CommentList = ({ items }) => {
  const { comment } = styles

  const renderItem = (item, idx) => (
    <View key={idx} style={comment}>
      <Text>{item}</Text>
    </View>
  )

  return <ScrollView>{items.map(renderItem)}</ScrollView>
}

const styles = StyleSheet.create({
  comment: {
    marginLeft: 20,
    paddingVertical: 20,
    paddingRight: 20,
    borderBottomColor: 'rgba(0,0,0,0.05)',
    borderBottomWidth: StyleSheet.hairlineWidth
  }
})

CommentList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default CommentList
