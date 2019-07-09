import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'

import CommentInput from '../components/CommentInput'
import CommentList from '../components/CommentList'
import NavigationBar from '../components/NavigationBar'

const Comments = ({ comments, onClose, onSubmitComment }) => {
  const { containerStyle } = styles

  return (
    <View style={containerStyle}>
      <NavigationBar
        title='Comments'
        leftText='Close'
        onPressLeftText={onClose}
      />
      <CommentInput placeholder='Leave a comment' onSubmit={onSubmitComment} />
      <CommentList items={comments} />
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    // flex: 1
  }
})

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmitComment: PropTypes.func.isRequired
}

export default Comments
