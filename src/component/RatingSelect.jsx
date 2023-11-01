import React, { useState } from 'react'

function RatingSelect({select}) {
    const [selected,setSelected]=useState(2);
    const handleChange=(e)=>{
        setSelected( +e.currentTarget.value)
        select(+e.currentTarget.value)
    }
  return (
    <ul>
        <li>
            <input type='radio' id='1' value="1" onChange={handleChange} checked={selected===1}></input>
            <label htmlFor='1'>1</label>
        </li>
        <li>
            <input type='radio' id='2' value="2" onChange={handleChange} checked={selected===2}></input>
            <label htmlFor='2'>2</label>
        </li>
        <li>
            <input type='radio' id='3' value="3" onChange={handleChange} checked={selected===3}></input>
            <label htmlFor='3'>2</label>
        </li>
    </ul>
  )
}

export default RatingSelect
