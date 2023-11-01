import React from 'react'
import PropTypes from 'prop-types'
function Card({children,reverse}) {
    return (
      <div style={{color: reverse ? '#fff' : 'black', backgroundColor: reverse ? 'black':'#fff'}}>
        {children}
      </div>
    )
  }

  Card.defaultProps={
    reverse:true,
  }

//   Card.PropTypes={
//     reverse:PropTypes.bool,
//     // children:PropTypes.node.isRequired
//   }
export default Card

