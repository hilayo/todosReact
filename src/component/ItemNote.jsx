import React from 'react'
import Card from './Card'
import {FaTimes} from 'react-icons/fa'
function ItemNote({item,handelDelete}) {
  return (
<Card >
    <button>
        <FaTimes color="purple" onClick={()=>handelDelete(item.id)}></FaTimes>
    </button>
    <div>
      {item.text}
    </div>
    </Card>
  )
}

export default ItemNote
