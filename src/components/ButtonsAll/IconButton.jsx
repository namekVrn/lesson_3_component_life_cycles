import React from 'react'
import '../ButtonsAll/Button.css'
const IconButton = ({children, onClick, ...allyProps}) =>( 
    <button type="button" className="button arrow" onClick={onClick} {...allyProps}>
        {children}
        </button>
)
export default IconButton