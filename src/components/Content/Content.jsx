import React from 'react'
import door from '../../assets/door.jpg'

const Content = () => {
  return (
    <div className='border-1 bg-slate-200 p-9 absolute left-5 xl:left-60 bottom-0 right-0 top-16 '>
        <img alt='' src={door} className='border-1 w-screen h-full rounded-3xl'/>
    </div>
  )
}

export default Content