import React from 'react'
import Content from '../Content/Content'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Navigation'

const Layout = ({children}) => {
  return (
    <div className='flex'>
       
        <Header />
        <Sidebar />
        
        <main>
        {children}
        </main>
        <Content />
    </div>
  )
}

export default Layout