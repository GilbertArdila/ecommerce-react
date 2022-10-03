import React from 'react'
import { Header } from '../../Components/Header/Header'

const Layout = ({children}) => {
  return (
    <div className="layout">
      <Header/>
        {children}
    </div>
  )
}

export  {Layout}