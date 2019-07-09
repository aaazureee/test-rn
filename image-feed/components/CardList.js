import React from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'

import { getImageFromId } from '../utils/api'
import Card from './Card'

const CardList = ({ imageData, comments, onPressComments }) => {
  const keyExtractor = ({ id }) => id.toString()

  const renderItem = ({ item: { id, author } }) => {
    const commentList = comments[id]

    return (
      <Card
        fullName={author}
        image={{
          uri: getImageFromId(id)
        }}
        linkText={`${commentList ? commentList.length : 0} Comments`}
        onPressLinkText={() => onPressComments(id)}
      />
    )
  }

  return (
    <FlatList
      data={imageData}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      extraData={comments}
    />
  )
}

CardList.propTypes = {
  imageData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  comments: PropTypes.shape({
    id: PropTypes.number,
    commentList: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  onPressComments: PropTypes.func.isRequired
}

export default CardList
