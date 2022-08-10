import React from 'react'
import Typed from 'react-typed';
import {TiSocialTwitter, TiSocialYoutube, TiSocialFacebook} from 'react-icons/ti'
import {Link} from 'react-router-dom'


const HomeScreen = () => {
  return (
    <div className='text-white w-screen h-screen flex flex-col items-center justify-center md:px-32'>
      <Typed
          strings={['Hello world!']}
          typeSpeed={40}
          className='text-5xl ms:text-7xl'
      />
      <div className='mx-auto flex gap-3 md:gap-4 mt-4 md:mt-10'>
        <Link to='/'><TiSocialTwitter className='hover:opacity-70 transition-opacity text-3xl md:text-4xl  border-2 rounded-full p-2'/></Link>
        <Link to='/'><TiSocialYoutube className='hover:opacity-70 transition-opacity text-3xl md:text-4xl  border-2 rounded-full p-2'/></Link>
        <Link to='/'><TiSocialFacebook className='hover:opacity-70 transition-opacity text-3xl md:text-4xl  border-2 rounded-full p-2'/></Link>
      </div>
    </div>
  )
}

export default HomeScreen
