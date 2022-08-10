import React from 'react'

const RegisterScreen = () => {
  return (
    <div className='text-white w-screen h-screen flex flex-col items-center justify-center md:px-32'>
    <h2 className='text-2xl mb-10'>Register </h2>
        <form className='gap-y-8 md:gap-y-4 flex flex-col'>
            <input placeholder='Username' type="text" class="mt-1 w-[320px]  sm:text-sm border-gray-800 rounded-md h-auto outline-none border-2 bg-black px-2 py-3 lowercase"/>
            <input placeholder='Mobile' type="text" class="mt-1 w-[320px]  sm:text-sm border-gray-800 rounded-md h-auto outline-none border-2 bg-black px-2 py-3"/>
            <input placeholder='Password' type="password" class="mt-1 w-[320px]  sm:text-sm border-gray-800 rounded-md h-auto outline-none border-2 bg-black px-2 py-3"/>
            <input placeholder='Confirm Password' type="password" class="mt-1 w-[320px]  sm:text-sm border-gray-800 rounded-md h-auto outline-none border-2 bg-black px-2 py-3"/>
            <button className='w-[320px]  sm:text-sm border-gray-300 rounded-md h-auto outline-none border-2 bg-black px-2 py-3 mt-6'>Create Account</button>
        </form>
    </div>
  )
}

export default RegisterScreen
