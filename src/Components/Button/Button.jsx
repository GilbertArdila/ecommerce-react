import React from 'react'
const Button = ({styles,text,type}) => {
  return (
    <button className={styles} type={type}>{text}</button>
  )
}

export { Button}