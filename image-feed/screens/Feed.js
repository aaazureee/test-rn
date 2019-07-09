import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator, Text } from 'react-native'

import { fetchImages } from '../utils/api'
import CardList from '../components/CardList'

const Feed = ({ comments, onPressComments }) => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    items: []
  })

  const { loading, items, error } = state

  useEffect(() => {
    console.log('Fetching images...')
    setState(state => ({ ...state, loading: true }))

    const fetch = async () => {
      try {
        const items = await fetchImages()
        setState(state => ({
          ...state,
          loading: false,
          items
        }))
      } catch (error) {
        setState(state => ({ ...state, loading: false, error }))
      }
    }

    fetch()
  }, [])

  if (loading) {
    return <ActivityIndicator size='large' style={{ flex: 1 }} />
  }

  if (error) {
    return <Text>{JSON.stringify(error, null, 2)}</Text>
  }

  return (
    <CardList
      imageData={items}
      comments={comments}
      onPressComments={onPressComments}
    />
  )
}

Feed.propTypes = {
  comments: PropTypes.shape({
    id: PropTypes.number,
    commentList: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  onPressComments: PropTypes.func.isRequired
}

export default Feed
