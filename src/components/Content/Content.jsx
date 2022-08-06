import React from 'react'


const Content = ({children}) => {


  return (
    <section className='absolute top-20 left-0 bottom-3 overflow-y-scroll xl:left-64 right-1 p-2'>
        {children}
    </section>
  )
}

export default Content