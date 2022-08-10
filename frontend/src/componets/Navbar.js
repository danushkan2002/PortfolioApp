import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-max-[1024px] h-28 flex items-center px-4 md:px-14 fixed w-screen bg-black'>
      <Link to={'/'} className='text-4xl '>Difang.</Link>
      <div className='flex ml-auto items-center gap-2 md:gap-4'>
        <Link to={'/Login'} className='text-xs md:text-base border-2 boreder-white px-4 py-1' > 
            <div className=''>Sign in</div>
        </Link>
        <Link to={'/Register'} className='bg-white text-xs md:text-base border-2 boreder-white text-black px-4 py-1' > 
            <div className=''>Sign up</div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
