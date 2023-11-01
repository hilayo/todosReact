import React from 'react'
import ItemNote from './ItemNote'
import {motion,AnimatePresence } from 'framer-motion'
function ItemList({items,handelDelete}) {
  return (
    <div>
        <AnimatePresence>
      {items.map((item)=>(
      <motion.div 
      key={item.id} 
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}>
         <ItemNote handelDelete={handelDelete} key={item.id} item={item} >
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
