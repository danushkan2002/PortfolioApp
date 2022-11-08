import React,{ useEffect, useState } from 'react'
import {Navigate, Outlet,Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileDetails } from '../actions/userAction'
import {   useNavigate } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import { logout } from '../actions/userAction'
import Logo from '../Assets/Logo.png'
import { useInView } from 'react-intersection-observer';

const Navbar = () => {
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const [navbar, setNavbar] = useState(false)
  const [path, setPath] = useState(null)

  const dispatch = useDispatch()
  const history = useNavigate()
  const pathName = useLocation()

  const { ref:navRef, inView:isNavVisible } = useInView({triggerOnce:true});

  useEffect(() => {
      dispatch(getProfileDetails())
  },[dispatch, pathName])

  const logoutHandler = () => {
    dispatch(logout())
    history('/')
  }



  return (
    <div ref={navRef} className={
      !navbar ?
      'fixed top-0 backdrop-blur-3xl w-max-[1024px] px-[25px] xl:px-[100px] min-h-[100px] flex flex-col md:flex-row justify-start md:justify-start md:items-center bg-transparent w-full z-50 overflow-hidden h-[100px] duration-1000':
      'fixed top-0 backdrop-blur-3xl w-max-[1024px] px-[25px] xl:px-[100px] min-h-[100px] flex flex-col md:flex-row justify-start md:justify-start md:items-center bg-transparent w-full z-50 h-auto duration-1000'
    }>
      <div className='h-[100px] flex items-center min-h-[100px] border-b-[1px] border-white border-opacity-25 md:border-0'>
        <Link to={'/'} className='flex items-center'>
          <img src={Logo} alt='' className='w-[35px]' />
          <p className='hidden md:block uppercase font-RobotoFlex text-2xl font-semibold tracking-wide ml-[5px] text-white' >ifang</p>
        </Link>
        <button onClick={() => setNavbar(!navbar)} className='ml-auto md:hidden text-white '>
          <AiOutlineMenu/>
        </button>
      </div>
      {
        userInfo?
        (
          userInfo.is_admin ?
          <div className='md:ml-auto flex flex-col md:flex-row items-center py-[25px] md:pb-0' >
            <button onClick={() => {setNavbar(!navbar); logoutHandler();}} className='font-RobotoFlex text-white py-[15px] md:py-[5px] w-full md:w-auto text-center duration-100 rounded-[2px] md:rounded-none md:px-[1px] md:border-b-[2px] md:border-transparent md:ml-[25px] focus:bg-10 md:focus:bg-transparent  md:focus:text-10'>
              Logout
            </button>
            <Link to={'/Messages'} onClick={() => setNavbar(!navbar)} className={
              pathName.pathname === '/Messages' ?
              'focus:animate-click font-RobotoFlex text-white py-[15px] md:py-[5px] w-full md:w-[100px] text-center duration-100 rounded-[2px] md:rounded-none md:px-[1px] md:border-b-[2px] md:border-transparent md:ml-[25px] bg-10  md:border-10 md:text-white':
              'focus:animate-click font-RobotoFlex text-white py-[15px] md:py-[5px] w-full md:w-[100px] text-center duration-100 rounded-[2px] md:rounded-none md:px-[1px] md:border-[2px] md:ml-[25px] bg-transparent md:border-10 md:text-10'
            }>
              Messages 
            </Link>
          </div>:
          <div className='md:ml-auto flex flex-col md:flex-row items-center py-[25px] md:pb-0' >
            <button onClick={() => {setNavbar(!navbar); logoutHandler();}} className='font-RobotoFlex text-white py-[15px] md:py-[5px] w-full md:w-auto text-center duration-100 rounded-[2px] md:rounded-none md:px-[1px] md:border-b-[2px] md:border-transparent md:ml-[25px] focus:bg-10 md:focus:bg-transparent  md:focus:text-10'>
              Logout
            </button>
            <Link to={'/Quotation'} onClick={() => setNavbar(!navbar)} className={
              pathName.pathname === '/Quotation' ?
              'focus:animate-click font-RobotoFlex text-white py-[15px] md:py-[5px] w-full md:w-[100px] text-center duration-100 rounded-[2px] md:rounded-none md:px-[1px] md:border-b-[2px] md:border-transparent md:ml-[25px] bg-10  md:border-10 md:text-white':
              'focus:animate-click font-RobotoFlex text-white py-[15px] md:py-[5px] w-full md:w-[100px] text-center duration-100 rounded-[2px] md:rounded-none md:px-[1px] md:border-[2px] md:ml-[25px] bg-transparent md:border-10 md:text-10'
            }>
              Quotation 
            </Link>
          </div>
        )
        :
        <div className='md:ml-auto flex flex-col md:flex-row items-center py-[25px] md:pb-0' >
          <Link to={'/Login'} onClick={() => setNavbar(!navbar)} className={
            pathName.pathname === '/Login' || pathName.pathname === '/Register' ?
            'hover:bg-10 hover:text-white focus:animate-click font-RobotoFlex text-white py-[15px] md:py-[5px] w-full md:w-[100px] text-center duration-100 rounded-[2px] md:rounded-none md:px-[1px] md:border-[2px] md:border-transparent md:ml-[25px] bg-10 md:border-10 md:text-white md:hover:bg-opacity-75 md:hover:border-opacity-75':
            'hover:bg-10 hover:text-white focus:animate-click font-RobotoFlex text-white py-[15px] md:py-[5px] w-full md:w-[100px] text-center duration-100 rounded-[2px] md:rounded-none md:px-[1px] md:border-[2px] md:ml-[25px] bg-transparent md:border-10 md:text-10'
          }>
            Join 
          </Link>
        </div>
      }
      
    </div>
  )
}

export default Navbar
