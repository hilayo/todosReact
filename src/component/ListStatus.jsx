import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/feedbackContext'
function ListStatus() {
  const {feedback}=useContext(FeedbackContext);
  return (
    <div className='feedback-stats'>
       <h4 >{feedback.length} reviews</h4>
       {/* <h4>Average Rating: {average.toFixed(1).replace(/[.,]0$/, '')}</h4> */}
    </div>
  )
}

export default ListStatus
