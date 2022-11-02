import React,{ useEffect } from 'react'
import {Navigate, Outlet,Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileDetails } from '../actions/userAction'
import {   useNavigate } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import { logout } from '../actions/userAction'


const Navbar = () => {
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()
  const history = useNavigate()

  useEffect(() => {
      dispatch(getProfileDetails())
  },[dispatch])

  const logoutHandler = () => {
    dispatch(logout())
    history('/')
  }

  return (
    <div className='fixed top-0 backdrop-blur-3xl w-max-[1024px] px-[25px] xl:px-[100px] h-[100px] flex items-center bg-transparent w-full z-50'>
      <Link to={'/'} className='text-2xl md:text-2xl font-RobotoFlex font-semibold text-white flex'> <span className='text-10'>S</span> <span className='hidden md:block '>ivakolondu</span><span className='text-10 ml-[10px]'>D</span>anushkan</Link>
      
        {
          userInfo ?
          <div className='ml-auto items-center gap-2 md:gap-[50px] hidden md:flex'>
            <Link to={'/Messages'} className='text-white font-RobotoFlex text-lg hover:text-10 duration-100 focus:border-b-[1.5px] focus:border-10 focus:text-10 border-b-[1.5px] border-transparent pb-[5px]'>Message</Link>
            <button onClick={logoutHandler} className='text-white font-RobotoFlex text-lg hover:text-10 duration-100 focus:border-b-[1.5px] focus:border-10 focus:text-10 border-b-[1.5px] border-transparent pb-[5px]' >Logout</button>
          </div>
          :
          <div className='ml-auto items-center gap-2 md:gap-[50px] hidden md:flex'>
            <Link to={'/Login'} className='text-white font-RobotoFlex text-lg hover:text-10 duration-100 focus:border-b-[1.5px] focus:border-10 focus:text-10 border-b-[1.5px] border-transparent pb-[5px]' >Login</Link>
          </div>
        }
        
      
      <button className='flex ml-auto items-center md:hidden'>
        <AiOutlineMenu className='text-2xl text-white'/>
      </button>
    </div>
  )
}

export default Navbar
