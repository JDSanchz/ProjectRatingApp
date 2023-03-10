import React from 'react'
import RatingItem from './RatingItem'
import PropTypes from 'react'

function FeedbackList({feedback}) {
    if (!feedback || feedback.length === 0){
            return <p>No Feedback yet</p>
    }
  return (
    <div className='feedback-list'>
      {feedback.map((item)=>(
        <RatingItem key={item.id} item={item}/>
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }
    ))
}

export default FeedbackList