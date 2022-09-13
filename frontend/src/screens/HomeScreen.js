import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiArrowUp } from 'react-icons/hi'
const HomeScreen = () => {
    const [about, setAbout] = useState(false)

    const aboutHandler = () => {
       setAbout(!about)
    }

  return (
    <div className='h-screen w-screen bg-[#28282B] flex items-center justify-center'>
    {
        !about ? 
        (
            <div className='fixed top-0 h-[100px] w-full flex items-center px-[100px] duration-150'>
                <p className='font-bold text-[#F9CC44] uppercase text-2xl tracking-widest'>Difang</p>
                <ul className='ml-auto flex font-semibold text-[#F5F0F0]'>
                    <Link to='' onClick={aboutHandler} className='hover:text-[#F9CC44] duration-150'>
                        <li>About Me</li>
                    </Link>
                </ul>
            </div>
        ) : (
            <div className='fixed top-0 bottom-0 left-0 right-0 bg-[#28282B] duration-200 m-[50px] flex rounded-[50px] rounded-tr-none shadow-[0px_0px_50px_rgba(0,0,0,0.5)] '>
                <div className='text-white ml-auto absolute right-0'>
                    <HiArrowUp onClick={aboutHandler} className='m-[25px] text-2xl text-[#F9CC44] '/>
                </div>
                <div className='mx-auto my-auto'>
                    <p className='font-black text-6xl text-[#F5F0F0]' >About</p>
                </div>
            </div>
        )
    }
      <div>
        <p className='font-black text-6xl text-[#F5F0F0]' >Working on it..!</p>
      </div>
    </div>
  )
}

export default HomeScreen
