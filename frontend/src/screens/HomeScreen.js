import React, {useEffect} from 'react'
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom'
import {AiFillGithub, AiOutlineAppstoreAdd, AiOutlineGlobal} from 'react-icons/ai'
import {HiDatabase} from 'react-icons/hi'
import heroBG from '../Assets/heroBG.png'

const HomeScreen = () => {
  const {pathName} = useLocation()
  
  const { ref:heroRef, inView:isHeroVisible } = useInView({triggerOnce:true});
  const { ref:serviceRef, inView:isServiceVisible } = useInView({triggerOnce:true});
  const { ref:contactRef, inView:isContactVisible } = useInView({triggerOnce:true});
  useEffect(() => {
    window.scroll(0,0);
  }, [pathName]);
  return (
    <div className='w-max-[1024px] -mt-[100px] md:w-max-[1024px] '>
      <section ref={heroRef} className='bg-60 items-center bg-no-repeat bg-contain bg-right-top flex px-[25px] md:px-[100px] mt-[100px] pb-[50px]'
        style={{
          backgroundImage:`url(${heroBG})`
        }} >
          <div className='mt-[400px] md:mt-[300px] mb-[50px] relative'>
            <p className={
              isHeroVisible ?
              'font-RobotoFlex text-5xl md:text-6xl font-medium text-white duration-1000':
              'font-RobotoFlex text-5xl md:text-6xl font-medium text-white opacity-0 mt-[50px] absolute'
            }>Hello, I’m a freelancer</p>
            <p className={
              isHeroVisible?
              'font-RobotoFlex text-base md:text-lg text-[#383A4F] md:w-[350px] mt-[10px] duration-1000 ':
              'font-RobotoFlex text-base md:text-lg opacity-0 md:w-[350px] mt-[50px] relative'
            }>Creating web application designs and bring them to life using code & develop mobile deigns</p>
            <button className={
              isHeroVisible?
              'w-[225px] h-[60px] bg-10 hover:bg-hover text-white font-RobotoFlex mt-[10px] duration-75':
              'w-[225px] h-[60px] bg-white hover:bg-hover text-white font-RobotoFlex mt-[10px] duration-75 relative'
            }>
              <p>Creator journey</p>
            </button>
          </div>
          <div className='ml-auto hidden lg:block'>
            <div className='flex flex-col items-center justify-center'>
              <div className='h-[25px] w-[25px] rounded-full bg-10'>
              </div>
              <div className='h-[60px] w-[2px] bg-30'>
              </div>
              <div className='h-[25px] w-[25px] rounded-full border-[1.5px] border-10'>
              </div>
              <div className='h-[60px] w-[2px] bg-30'>
              </div>
              <div className='h-[25px] w-[25px] rounded-full border-[1.5px] border-10'>
              </div>
            </div>
          </div>
      </section>
      <section  className='px-[25px] xl:px-[100px]'>
        <div className='flex justify-center'>
          <div className='mt-[75px] md:mt-[100px]'>
            <p className={
              isServiceVisible?
              'font-RobotoFlex text-white text-base md:text-lg duration-1000':
              'font-RobotoFlex text-white text-base md:text-lg opacity-0'
            }>Services</p>
            <p className={
              isServiceVisible?
              'font-RobotoFlex text-5xl md:text-6xl font-medium text-10 duration-700':
              'font-RobotoFlex text-5xl md:text-6xl font-medium text-10 mt-[50px] opacity-0'
            }>Skill-Set</p>
            <div ref={serviceRef} className={
              isServiceVisible?
              'w-[100px] bg-10 h-[5px] mt-[15px] duration-1000':
              'w-[100px] bg-10 h-[5px] mt-[15px] scale-x-50'
            }></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-start pt-[25px] gap-[25px] md:gap-[50px] pb-[75px] md:pb-[100px]'>
              <div className='md:w-[250px] h-[150px] md:h-[250px] bg-30 rounded-[5px] hover:scale-105 text-10 hover:text-hover duration-100 px-[25px] py-[25px]'>
                <AiFillGithub className={
                  isServiceVisible ?
                  'text-4xl md:text-5xl duration-1000':
                  'text-4xl md:text-5xl mt-[50px] opacity-0'
                }/>
                <p className={
                  isServiceVisible?
                  'font-RobotoFlex mt-[10px] md:mt-[20px] text-white text-xs md:text-base font-semibold duration-1000':
                  'font-RobotoFlex mt-[10px] md:mt-[20px] text-white text-xs md:text-base font-semibold opacity-0'
                }>Git Version Control</p>
                <p className={
                  isServiceVisible ?
                  'font-RobotoFlex mt-[5px] md:mt-[10px] text-[#9395A0] text-xs md:text-base duration-1000':
                  'font-RobotoFlex mt-[5px] md:mt-[10px] text-[#9395A0] text-xs md:text-base opacity-0'
                }>I can handle everything from small to very large projects with speed and efficiency</p>
              </div>
              <div className='md:w-[250px] h-[150px] md:h-[250px] bg-30 rounded-[5px] hover:scale-105 text-10 hover:text-hover duration-100 px-[25px] py-[25px]'>
                <AiOutlineAppstoreAdd className={
                  isServiceVisible ?
                  'text-4xl md:text-5xl duration-1000':
                  'text-4xl md:text-5xl mt-[50px] opacity-0'
                }/>
                <p className={
                  isServiceVisible?
                  'font-RobotoFlex mt-[10px] md:mt-[20px] text-white text-xs md:text-base font-semibold duration-1000':
                  'font-RobotoFlex mt-[10px] md:mt-[20px] text-white text-xs md:text-base font-semibold opacity-0'
                }>App Design</p>
                <p className={
                  isServiceVisible ?
                  'font-RobotoFlex mt-[5px] md:mt-[10px] text-[#9395A0] text-xs md:text-base duration-1000':
                  'font-RobotoFlex mt-[5px] md:mt-[10px] text-[#9395A0] text-xs md:text-base opacity-0'
                }>I can create software applications that run on a mobile device</p>
              </div>
              <div className='md:w-[250px] h-[150px] md:h-[250px] bg-30 rounded-[5px] hover:scale-105 text-10 hover:text-hover duration-100 px-[25px] py-[25px]'>
                <HiDatabase className={
                  isServiceVisible ?
                  'text-4xl md:text-5xl duration-1000':
                  'text-4xl md:text-5xl mt-[50px] opacity-0'
                }/>
                <p className={
                  isServiceVisible?
                  'font-RobotoFlex mt-[10px] md:mt-[20px] text-white text-xs md:text-base font-semibold duration-1000':
                  'font-RobotoFlex mt-[10px] md:mt-[20px] text-white text-xs md:text-base font-semibold opacity-0'
                }>Back-end Development</p>
                <p className={
                  isServiceVisible ?
                  'font-RobotoFlex mt-[5px] md:mt-[10px] text-[#9395A0] text-xs md:text-base duration-1000':
                  'font-RobotoFlex mt-[5px] md:mt-[10px] text-[#9395A0] text-xs md:text-base opacity-0'
                }>working on server-side, which focuses on everything you can't see on a website</p>
              </div>
              <div className='md:w-[250px] h-[150px] md:h-[250px] bg-30 rounded-[5px] hover:scale-105 text-10 hover:text-hover duration-100 px-[25px] py-[25px]'>
                <AiOutlineGlobal className={
                  isServiceVisible ?
                  'text-4xl md:text-5xl duration-1000':
                  'text-4xl md:text-5xl mt-[50px] opacity-0'
                }/>
                <p className={
                  isServiceVisible?
                  'font-RobotoFlex mt-[10px] md:mt-[20px] text-white text-xs md:text-base font-semibold duration-1000':
                  'font-RobotoFlex mt-[10px] md:mt-[20px] text-white text-xs md:text-base font-semibold opacity-0'
                }>Web Development</p>
                <p className={
                  isServiceVisible ?
                  'font-RobotoFlex mt-[5px] md:mt-[10px] text-[#9395A0] text-xs md:text-base duration-1000':
                  'font-RobotoFlex mt-[5px] md:mt-[10px] text-[#9395A0] text-xs md:text-base opacity-0'
                }>Creating, building, and maintaining websites and web applications that run online on a browser</p>
              </div>
            </div>
          </div>
          <div className='ml-auto my-auto hidden lg:block'>
            <div className='flex flex-col items-center justify-center'>
              <div className='h-[25px] w-[25px] rounded-full border-[1.5px] border-10'>
              </div>
              <div className='h-[60px] w-[2px] bg-30'>
              </div>
              <div className='h-[25px] w-[25px] rounded-full bg-10'>
              </div>
              <div className='h-[60px] w-[2px] bg-30'>
              </div>
              <div className='h-[25px] w-[25px] rounded-full border-[1.5px] border-10'>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-60 py-[75px] md:py-[100px] px-[25px] xl:px-[100px]'>
        <div className='flex  justify-center'>
          <form  ref={contactRef} className='flex flex-col w-full md:w-[550px]'>
            <p className={
              isContactVisible?
              'text-5xl md:text-6xl font-RobotoFlex font-medium text-10 duration-1000':
              'text-5xl md:text-6xl font-RobotoFlex font-medium text-10 mt-[100px] opacity-0'
            }>Connect me</p>
            <div className={
              isContactVisible?
              'w-[100px] h-[5px] bg-10 mt-[10px] duration-700':
              'w-[100px] h-[5px] bg-10 mt-[10px] scale-x-50'
            } ></div>
            <div className='mt-[25px]'>
              <input className={
                isContactVisible?
                'h-[50px] md:h-[75px] w-full md:w-[550px] bg-30 px-[25px] font-RobotoFlex outline-none duration-1000':
                'h-[50px] md:h-[75px] w-full md:w-[550px] bg-30 px-[25px] font-RobotoFlex outline-none opacity-0'
              } placeholder='Email' type={'email'}></input>
            </div>
            <div className='mt-[25px]'>
              <input className={
                isContactVisible?
                'h-[50px] md:h-[75px] w-full md:w-[550px] bg-30 px-[25px] font-RobotoFlex outline-none duration-1000':
                'h-[50px] md:h-[75px] w-full md:w-[550px] bg-30 px-[25px] font-RobotoFlex outline-none opacity-0'
              } placeholder='Password' type={'text'}></input>
            </div>
            <button className='w-[150px] md:w-[225px] h-[50px] md:h-[60px] bg-10 ml-auto font-RobotoFlex mt-[25px] font-semibold text-xs md:text-base'>
              <p>Stay Connected</p>
            </button>
          </form>
          <div className='ml-auto my-auto hidden lg:block'>
            <div className='flex flex-col items-center justify-center'>
              <div className='h-[25px] w-[25px] rounded-full border-[1.5px] border-10'>
              </div>
              <div className='h-[60px] w-[2px] bg-30'>
              </div>
              <div className='h-[25px] w-[25px] rounded-full border-[1.5px] border-10'>
              </div>
              <div className='h-[60px] w-[2px] bg-30'>
              </div>
              <div className='h-[25px] w-[25px] rounded-full bg-10'>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeScreen
