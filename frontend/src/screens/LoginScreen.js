import React from 'react'

const LoginScreen = () => {
  return (
    <div className='text-white w-screen h-screen flex flex-col items-center justify-center md:px-32'>
    
      <form className='gap-y-4 md:gap-y-4 flex flex-col border-2 border-gray-800 p-2 md:p-4'>
        <h2 className='text-2xl mb-10 uppercase'>Login </h2>
        <input placeholder='Username' type="text" class="mt-1 w-[320px]  sm:text-sm border-gray-800 rounded-md h-auto outline-none border-2 bg-black px-2 py-2 md:py-3 lowercase"/>
        <input placeholder='Password' type="password" class="mt-1 w-[320px]  sm:text-sm border-gray-800 rounded-md h-auto outline-none border-2 bg-black px-2 py-2 md:py-3"/>
        <button className='w-[320px]  sm:text-sm border-white  rounded-md h-auto outline-none border-2 bg-white px-2 py-2 md:py-3 mt-6 text-black'>Authenticate</button>
      </form>
    </div>
  )
}

export default LoginScreen
