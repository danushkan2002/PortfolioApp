import React, {useEffect , useState} from 'react'
import WloginBG from '../Assets/WloginBG.png'
import MloginBG from '../Assets/MloginBG.png'
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import  {login} from '../actions/userAction'
import {   useNavigate } from 'react-router-dom'
import { getProfileDetails } from '../actions/userAction'


const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo, loading, error } = userLogin

  const {pathName} = useLocation()
  const dispatch = useDispatch()
  const history = useNavigate()

  const { ref:loginRef, inView:isLoginVisible } = useInView({triggerOnce:true});

  useEffect(() => {
    window.scroll(0,0);
    if (userInfo) {
      history('/')
      dispatch(getProfileDetails())
    } else {
      console.log('hello')
    }

  }, [pathName, userInfo]);
  
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <div className='h-screen pt-[100px] w-full flex items-center justify-center min-h-[600px] '>
      <div ref={loginRef} className='relative w-full md:w-auto h-full md:h-auto'>
        <div className='w-full md:w-[600px] h-full md:h-auto flex items-center'>
          <form onSubmit={submitHandler} className='w-full md:w-[400px] p-[25px] flex flex-col z-40 backdrop-blur-2xl'>
              <p className={
                isLoginVisible?
                'font-RobotoFlex text-5xl md:text-6xl font-semibold text-10 duration-500':
                'font-RobotoFlex text-5xl md:text-6xl font-semibold text-10 mt-[50px]'
              }>Sign in</p> 
              <div className=''>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} className='mt-[25px] h-[50px] w-full bg-30 font-RobotoFlex outline-none text-white px-[25px] font-medium' type={'email'} placeholder='Email'></input>
              </div>     
              <div className=''>
                  <input value={password} onChange={(e) => setPassword(e.target.value) } className='mt-[5px] h-[50px] w-full bg-30 font-RobotoFlex outline-none text-white px-[25px] font-medium' type={'password'} placeholder='Password'></input>
              </div>     
              <button type={'submit'} className='w-1/2 h-[50px] bg-10 text-white font-RobotoFlex ml-auto mt-[25px]'>Login</button>  
          </form>
        </div>
        <img src={WloginBG} alt='' className={
          isLoginVisible?
          'hidden md:block object-cover h-[500px] w-[500px] absolute top-1/2 left-1/2 transform -z-10 -translate-x-1/4 -translate-y-1/2 duration-1000':
          'hidden md:block object-cover h-[500px] w-[500px] absolute top-1/2 left-1/2 transform -z-10 -translate-x-1/4 -translate-y-1/2 opacity-0'
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

export default LoginScreen
