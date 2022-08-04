import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <Sidebar/>
        <main>
        {children}
        </main>
      </>
  )
}

export default Layout