import React from 'react'
import Card from './shared/Card'
import PropTypes from 'react'

function RatingItem({item}) {

  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

RatingItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default RatingItem