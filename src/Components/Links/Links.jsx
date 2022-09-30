import React from 'react'
import {Link} from 'react-dom'

const Links = ({to,text}) => {
  return (
    <li>
      <a href={to}>{text}</a>
    </li>
    
  )
}

export { Links}