import React from 'react'

import {useState,useEffect} from 'react'
import Card from './Card'
import Button from './Button'
import RatingSelect from './RatingSelect'
import { useContext } from 'react'
import FeedbackContext from '../context/feedbackContext'
function NoteForm({}) {

    const [text,setText]=useState('');
    const [btnDisable,setBtnDisabled]=useState(true);
    const [message,setMessage]=useState('');
    const [rating,setRating]=useState(10);
    const {addNewFeedback,feedbackEdit,updateFeedback}=useContext(FeedbackContext);
    
    useEffect(()=>{
        if(feedbackEdit.edit==true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    
    },[feedbackEdit])
    const HandelText=(e)=>{
         let newText = e.target.value;
       

        if(newText==''){
            setBtnDisabled(true)
            setMessage(null)
        }
        else if(newText!=''&& newText.trim().length<=10){
            setBtnDisabled(true)
            setMessage("text must be etlast 10 charcature")
        }
        else{
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(newText);
    }

    const HandelSubmit=(e)=>{
        e.preventDefault();
        if(text.trim().length>10){
            const newNote={text,rating}
            if(feedbackEdit.edit==true){
               updateFeedback(feedbackEdit.item.id,newNote)
            }
            else{
            addNewFeedback(newNote);
            }
           setText('');
        }
        
    }
  return (
    <Card>
    <form onSubmit={HandelSubmit}> 
       <div>
       <h2>How would you rate your service with us?</h2>
       
       <RatingSelect select={(rating)=>{setRating(rating)}}></RatingSelect>
       <div  className='input-group'>
      <input onChange={HandelText} type="text" placeholder="add a review" name="" id="" value={text} />
      <Button type='submit'  version='secondary' isDisable={btnDisable}>send</Button>
      {message && <div className='message'>{message}</div>}
    </div>
    </div>

    
    </form>
 </Card>
  )
}

export default NoteForm
