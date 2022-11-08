import React, {useEffect , useState} from 'react'
import WloginBG from '../Assets/WloginBG.png'
import MloginBG from '../Assets/MloginBG.png'
import { useInView } from 'react-intersection-observer';
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import  {login} from '../actions/userAction'
import {   useNavigate } from 'react-router-dom'
import { getProfileDetails } from '../actions/userAction'
import gif from '../Assets/gif.gif'
import SL from '../Assets/SL.png'
import LL from '../Assets/LL.png'
import success from '../Assets/success.png'
import errorIMG from '../Assets/error.png'
import {IoMdRemoveCircleOutline} from 'react-icons/io'
import { logout } from '../actions/userAction';

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [path, setPath] = useState(null)
  
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo, loading, error } = userLogin

  const pathName = useLocation()
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
  
  const refreshPage = ()=>{
    console.log(path)  
  }

  const logoutHandler = () => {
    dispatch(logout())
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <div className='h-screen pt-[100px] w-full flex items-center justify-center min-h-[650px] '>
      <div ref={loginRef} className='relative w-full md:w-auto h-full md:h-auto'>
        <div className='w-full md:w-[600px] h-full md:h-auto flex items-center realtive'>
          <form onSubmit={submitHandler} className='w-full md:w-[400px] p-[25px] flex flex-col z-40 backdrop-blur-2xl'>
              <div className='flex items-end'>
                <p className={
                  isLoginVisible?
                  'font-RobotoFlex text-5xl md:text-6xl font-semibold text-10 duration-500':
                  'font-RobotoFlex text-5xl md:text-6xl font-semibold text-10 mt-[50px]'
                }>Sign in</p>
                <Link to={'/Register'} className='ml-auto font-RobotoFlex text-white hover:text-10 pb-[3px]'>Sign up</Link>
              </div> 
              <div className=''>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} className='mt-[25px] h-[50px] w-full border-[1px] rounded-[2.5px] focus:border-opacity-50 duration-200 focus:border-[1.25px] bg-transparent border-white border-opacity-25 font-RobotoFlex outline-none text-white px-[25px]' type={'email'} placeholder='Email'></input>
              </div>     
              <div className=''>
                  <input value={password} onChange={(e) => setPassword(e.target.value) } className='mt-[5px] h-[50px] w-full border-[1px] rounded-[2.5px] focus:border-opacity-50 duration-200 focus:border-[1.25px] bg-transparent border-white border-opacity-25 font-RobotoFlex outline-none text-white px-[25px]' type={'password'} placeholder='Password'></input>
              </div>     
              <button type={'submit'} className='w-1/2 h-[50px] bg-10 text-white font-RobotoFlex ml-auto mt-[25px]'>Login</button>  
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


