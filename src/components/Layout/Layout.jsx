import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Navigation'

const Layout = ({children}) => {
  return (
    <>
        <Header />
        <Sidebar />
        <main>
        {children}
        </main>
    </>
  )
}

export default Layout