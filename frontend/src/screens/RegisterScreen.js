import React, {useEffect , useState} from 'react'
import WloginBG from '../Assets/WloginBG.png'
import MloginBG from '../Assets/MloginBG.png'
import { useInView } from 'react-intersection-observer';
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import  {login, register} from '../actions/userAction'
import {   useNavigate } from 'react-router-dom'
import { getProfileDetails } from '../actions/userAction'
import gif from '../Assets/gif.gif'
import SL from '../Assets/SL.png'
import LL from '../Assets/LL.png'
import success from '../Assets/success.png'
import errorIMG from '../Assets/error.png'
import {IoMdRemoveCircleOutline} from 'react-icons/io'
import { logout } from '../actions/userAction';

const RegisterScreen = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [path, setPath] = useState(null)
  
  const userRegisterReducer = useSelector(state => state.userRegisterReducer)
  const { userInfo, loading, error } = userRegisterReducer

  const pathName = useLocation()
  const dispatch = useDispatch()
  const history = useNavigate()

  const { ref:loginRef, inView:isLoginVisible } = useInView({triggerOnce:true});

  useEffect(() => {
    window.scroll(0,0);
    if (userInfo) {
      history('/Login')
      dispatch(getProfileDetails())
    } else {
      console.log('hello')
    }

  }, [pathName, userInfo]);
  
  const refreshPage = ()=>{
    console.log(path)  
  }

  const logoutHandler = () => {
    dispatch(logout())
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(register(username, email, password))
  }

  return (
    <div className='h-screen pt-[100px] w-full flex items-center justify-center min-h-[700px] '>
      <div ref={loginRef} className='relative w-full md:w-auto h-full md:h-auto'>
        <div className='w-full md:w-[600px] h-full md:h-auto flex items-center justify-center realtive'>
          <form onSubmit={submitHandler} className='w-full md:w-[400px] p-[25px] flex flex-col z-40 backdrop-blur-2xl'>
              <div className='flex items-end'>
                <p className={
                  isLoginVisible?
                  'font-RobotoFlex text-5xl md:text-6xl font-semibold text-10 duration-500':
                  'font-RobotoFlex text-5xl md:text-6xl font-semibold text-10 mt-[50px]'
                }>Sign up</p>
                <Link to={'/Login'} className='ml-auto font-RobotoFlex text-white hover:text-10 pb-[3px]'>Sign in</Link>
              </div> 
              <div className=''>
                  <input className='mt-[25px] h-[50px] w-full border-[1px] rounded-[2.5px] focus:border-opacity-50 duration-200 focus:border-[1.25px] bg-transparent border-white border-opacity-25 font-RobotoFlex outline-none text-white px-[25px]' value={username} onChange={(e) => setUsername(e.target.value)} type={'text'} placeholder='Username'></input>
              </div>
              <div className=''>
                  <input className='mt-[5px] h-[50px] w-full border-[1px] rounded-[2.5px] focus:border-opacity-50 duration-200 focus:border-[1.25px] bg-transparent border-white border-opacity-25 font-RobotoFlex outline-none text-white px-[25px]' value={email} onChange={(e) => setEmail(e.target.value)} type={'email'} placeholder='Email'></input>
              </div>     
              <div className=''>
                  <input className='mt-[5px] h-[50px] w-full border-[1px] rounded-[2.5px] focus:border-opacity-50 duration-200 focus:border-[1.25px] bg-transparent border-white border-opacity-25 font-RobotoFlex outline-none text-white px-[25px]' value={password} onChange={(e) => setPassword(e.target.value)} type={'password'} placeholder='Password'></input>
              </div>
              <div className=''>
                  <input className='mt-[5px] h-[50px] w-full border-[1px] rounded-[2.5px] focus:border-opacity-50 duration-200 focus:border-[1.25px] bg-transparent border-white border-opacity-25 font-RobotoFlex outline-none text-white px-[25px]' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type={'password'} placeholder='Confirm Password'></input>
              </div>     
              <button type={'submit'} className='w-1/2 h-[50px] bg-10 text-white font-RobotoFlex ml-auto mt-[25px]'>Register</button>  
          </form>
          {
            loading ?            
            <div className='w-full md:w-[400px] p-[25px] flex flex-col items-center justify-center z-40 bg-30 absolute h-full duration-200 bg-opacity-25' >
              <span class="flex h-[35px] w-[35px] relative">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-10 opacity-75"></span>
                <span class=" inline-flex rounded-full h-[35px] w-[35px] border-[5px] border-10 opacity-75"></span>
              </span>
            </div> :
            error ?
            <div className='w-full md:w-[400px] p-[25px] flex flex-col items-center justify-center z-40 backdrop-blur-2xl absolute h-full duration-200 bg-opacity-25' >
                <img src={errorIMG} alt='' className='w-[50px]' />
                <p className='text-white font-RobotoFlex text-lg font-semibold uppercase'>Error</p>
                <p className='font-RobotoFlex text-white opacity-50 w-[200px] text-center text-sm' >{error}</p>
                <button onClick={logoutHandler} className='font-RobotoFlex w-[225px] h-[60px] border-[2.5px] border-[#EB2728] text-[#EB2728] mt-[25px] text-xs hover:bg-[#EB2728] hover:text-white duration-200' >Retry</button>
            </div> :
            ''
          }
          
        </div>
        <img src={WloginBG} alt='' className={
          isLoginVisible?
          'hidden md:block object-cover h-[600px] w-[600px] absolute top-1/2 left-1/2 transform -z-10 -translate-x-1/2 -translate-y-1/2 duration-1000':
          'hidden md:block object-cover h-[600px] w-[600px] absolute top-1/2 left-1/2 transform -z-10 -translate-x-1/2 -translate-y-1/2 opacity-0'
        }/>
        <img src={MloginBG} alt='' className={
          isLoginVisible?
          'md:hidden object-cover absolute top-1/2 right-0  -z-10 -translate-y-1/2 duration-1000':
          'md:hidden object-cover absolute top-1/2 right-0  -z-10 -translate-y-1/2 opacity-0'
        }/>
      </div>
    </div>
  )
}

export default RegisterScreen


