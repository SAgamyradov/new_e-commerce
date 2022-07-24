import React from 'react'
import Content from '../Content/Content'
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
        <Content />
    </>
  )
}

export default Layout