import React from 'react'
import Card from './Card'
import {FaTimes,FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/feedbackContext'
function ItemNote({item,handelDelete}) {
  const {deleteItem,editFeedback} = useContext(FeedbackContext);
return (
  <Card>
    <div className='num-display'>{item.rating}</div>
    <button onClick={() => deleteItem(item.id)} className='close'>
      <FaTimes color='purple' />
    </button>
    <button onClick={() => editFeedback(item)} className='edit'>
      <FaEdit color='purple' />
    </button>
    <div className='text-display'>{item.text}</div>
  </Card>
)

}

export default ItemNote
