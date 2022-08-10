import React from 'react'

const Page = ({children}) => {
  return (
    <div className='w-screen h-screen bg-black font-bold text-white'>
      {children}
    </div>
  )
}

export default Page
