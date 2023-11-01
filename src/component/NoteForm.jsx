import React from 'react'

import {useState} from 'react'
import Card from './Card'
import Button from './Button'
import RatingSelect from './RatingSelect'

function NoteForm({handelAdd}) {

    const [text,setText]=useState('');
    const [btnDisable,setBtnDisabled]=useState(true);
    const [message,setMessage]=useState('');
    const [rating,setRating]=useState(10);
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
            handelAdd(newNote);
           setText('');
        }
        
    }
  return (
    <Card>
    <form onSubmit={HandelSubmit}> 
       <div>
       <RatingSelect select={(rating)=>{setRating(rating)}}></RatingSelect>
      <input onChange={HandelText} type="text" placeholder="add a review" name="" id="" value={text} />
      <Button type='submit'  version='secondary' isDisable={btnDisable}>send</Button>
      {message && <div>{message}</div>}
    </div>
    
    </form>
 </Card>
  )
}

export default NoteForm
