import React from 'react'
import ItemNote from './ItemNote'
import {motion,AnimatePresence } from 'framer-motion'
import { useContext } from 'react';
import FeedbackContext from '../context/feedbackContext'
import Spinner from './shared/Spinner';
function ItemList({handelDelete}) {
  const {feedback,isLoading}=useContext(FeedbackContext);
  if(!isLoading && (!feedback || feedback.length ==0)){
    return <p>no feedback yet</p>
  }
  return isLoading ? <Spinner/> : (
    <div className='feedback-list'>
        <AnimatePresence>
      {feedback.map((item)=>(
      <motion.div 
      key={item.id} 
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}>
         <ItemNote  key={item.id} item={item} >
            </ItemNote> 
            </motion.div> ))}
      </AnimatePresence>
    </div>

    // <div>
    //   {items.map((item)=>(  <ItemNote handelDelete={handelDelete} key={item.id} item={item} ></ItemNote> ))}
    // </div>
  )
}

export default ItemList
