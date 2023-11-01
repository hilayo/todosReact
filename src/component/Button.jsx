import React from 'react'
import PropTypes from 'prop-types'
function Button({children,type,version,isDisable}) {
  return (
    <button type={type} disabled={isDisable} className={`btn btn-${version}`}>
    {children}</button>
  )
}

Button.defaultProps={
type:"button",
version:"primary",
isDisable:false
}

Button.defaultProps={

    children:PropTypes.node.isRequired,
    type:PropTypes.string,
    version:PropTypes.string,
    isDisable:PropTypes.bool,
}
export default Button
