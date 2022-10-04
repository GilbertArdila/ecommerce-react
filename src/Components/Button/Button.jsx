import React from 'react'
const Button = ({styles,text,type,onClick}) => {
  return (
    <button className={styles} type={type} onClick={onClick}>{text} </button>
  )
}

export { Button}