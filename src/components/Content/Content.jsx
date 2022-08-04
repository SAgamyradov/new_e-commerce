import React from 'react'


const Content = ({children}) => {


  return (
    <section className='absolute top-16 left-0 xl:left-64 right-3 p-2'>
        {children}
    </section>
  )
}

export default Content