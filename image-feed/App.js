import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Modal, AsyncStorage } from 'react-native'

import Feed from './screens/Feed'
import Comments from './screens/Comments'

const COMMENTS_KEY = 'ASYNC_STORAGE_COMMENTS_KEY'

const App = () => {
  const [state, setState] = useState({
    comments: {},
    showModal: false,
    selectedItemId: null
  })

  const { comments, showModal, selectedItemId } = state

  useEffect(() => {
    console.log('Loading comments from async storage...')
    const getComments = async () => {
      try {
        let comments = await AsyncStorage.getItem(COMMENTS_KEY)
        comments = comments ? JSON.parse(comments) : {}
        setState(state => ({ ...state, comments }))
      } catch (error) {
        console.log('Failed to load comments from async storage.')
      }
    }
    getComments()
  }, [])

  const openComments = id => {
    setState({ ...state, showModal: true, selectedItemId: id })
  }

  const closeComments = () => {
    setState({ ...state, showModal: false, selectedItemId: null })
  }

  const onSubmitComment = async text => {
    const commentList = comments[selectedItemId] || []

    const updated = {
      ...comments,
      [selectedItemId]: [...commentList, text]
    }

    setState({ ...state, comments: updated })

    try {
      await AsyncStorage.setItem(COMMENTS_KEY, JSON.stringify(updated))
    } catch (error) {
      console.log('Failed to save comment', text, 'for id', selectedItemId)
    }
  }

  return (
    <View style={styles.container}>
      <Feed comments={comments} onPressComments={openComments} />
      <Modal
        visible={showModal}
        animationType='slide'
        onRequestClose={closeComments}
      >
        <Comments
          comments={comments[selectedItemId] || []}
          onClose={closeComments}
          onSubmitComment={onSubmitComment}
        />
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default App
