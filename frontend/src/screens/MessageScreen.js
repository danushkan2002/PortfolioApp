import React, {useEffect} from 'react'
import {AiOutlineCopy} from 'react-icons/ai'
import {MdDeleteOutline} from 'react-icons/md'
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom'

const MessageScreen = () => {
  const {pathName} = useLocation()

  const { ref:messageRef, inView:isMessageVisible } = useInView({triggerOnce:true});

  useEffect(() => {
    window.scroll(0,0);
  }, [pathName]);

  return (
    <div className='mt-[100px] lg:mt-[125px] xl:px-[100px] flex flex-col lg:flex-row '>
       <div ref={messageRef} className='lg:w-1/4 lg:h-screen border-t-2 lg:border-none py-[25px] lg:px-[25px] grid grid-flow-col lg:block overflow-x-scroll lg:overflow-x-hidden pl-[25px] lg:bg-30 border-opacity-5 border-white'>
            <button className={
                isMessageVisible?
                'h-[50px] font-RobotoFlex focus:px-[25px] bg-transparent focus:bg-10 focus:text-white min-w-[100px] px-[15px] lg:px-0 flex lg:flex-none border-2 lg:border-none items-center lg:justify-start justify-center mr-[15px] lg:mr-0 whitespace-nowrap rounded border-10 text-10 lg:text-white lg:w-full text-left duration-500 text-sm lg:text-base':
                'h-[50px] font-RobotoFlex focus:px-[25px] bg-transparent focus:bg-10 focus:text-white min-w-[100px] px-[15px] lg:px-0 flex lg:flex-none border-2 lg:border-none items-center lg:justify-start justify-center mr-[15px] lg:mr-0 whitespace-nowrap rounded border-10 text-10 lg:text-white lg:w-full text-left duration-300 text-sm lg:text-base pl-0 lg:pl-auto lg:-ml-[50px] opacity-0'
            }>
                Today
            </button>
            <button className={
                isMessageVisible?
                'h-[50px] font-RobotoFlex focus:px-[25px] bg-transparent focus:bg-10 focus:text-white min-w-[100px] px-[15px] lg:px-0 flex lg:flex-none border-2 lg:border-none items-center lg:justify-start justify-center mr-[15px] lg:mr-0 whitespace-nowrap rounded border-10 text-10 lg:text-white lg:w-full text-left duration-500 text-sm lg:text-base':
                'h-[50px] font-RobotoFlex focus:px-[25px] bg-transparent focus:bg-10 focus:text-white min-w-[100px] px-[15px] lg:px-0 flex lg:flex-none border-2 lg:border-none items-center lg:justify-start justify-center mr-[15px] lg:mr-0 whitespace-nowrap rounded border-10 text-10 lg:text-white lg:w-full text-left duration-300 text-sm lg:text-base pl-0 lg:pl-auto lg:-ml-[50px] opacity-0'
            }>
                Yesterday
            </button>
            <button className={
                isMessageVisible?
                'h-[50px] font-RobotoFlex focus:px-[25px] bg-transparent focus:bg-10 focus:text-white min-w-[100px] px-[15px] lg:px-0 flex lg:flex-none border-2 lg:border-none items-center lg:justify-start justify-center mr-[15px] lg:mr-0 whitespace-nowrap rounded border-10 text-10 lg:text-white lg:w-full text-left duration-500 text-sm lg:text-base':
                'h-[50px] font-RobotoFlex focus:px-[25px] bg-transparent focus:bg-10 focus:text-white min-w-[100px] px-[15px] lg:px-0 flex lg:flex-none border-2 lg:border-none items-center lg:justify-start justify-center mr-[15px] lg:mr-0 whitespace-nowrap rounded border-10 text-10 lg:text-white lg:w-full text-left duration-300 text-sm lg:text-base pl-0 lg:pl-auto lg:-ml-[50px] opacity-0'
            }>
                Last month
            </button>
            <button className={
                isMessageVisible?
                'h-[50px] font-RobotoFlex focus:px-[25px] bg-transparent focus:bg-10 focus:text-white min-w-[100px] px-[15px] lg:px-0 flex lg:flex-none border-2 lg:border-none items-center lg:justify-start justify-center mr-[15px] lg:mr-0 whitespace-nowrap rounded border-10 text-10 lg:text-white lg:w-full text-left duration-500 text-sm lg:text-base':
                'h-[50px] font-RobotoFlex focus:px-[25px] bg-transparent focus:bg-10 focus:text-white min-w-[100px] px-[15px] lg:px-0 flex lg:flex-none border-2 lg:border-none items-center lg:justify-start justify-center mr-[15px] lg:mr-0 whitespace-nowrap rounded border-10 text-10 lg:text-white lg:w-full text-left duration-300 text-sm lg:text-base pl-0 lg:pl-auto lg:-ml-[50px] opacity-0'
            }>
                Last 2 months
            </button>
       </div>
       <div className='lg:w-3/4 px-[25px] lg:px-0 lg:pl-[50px] flex flex-col mt-[25px] lg:mt-0' >
            <p className={
                isMessageVisible?
                'font-RobotoFlex text-10 font-bold text-xl border-b-[2px] border-10 w-[200px] duration-500':
                'font-RobotoFlex text-10 font-bold text-xl border-b-[2px] border-10 w-[100px]'
            }>
                Mail
            </p>
            <div className='w-full h-[2px] opacity-10 bg-white flex mt-[25px]'></div>
            <div className='flex flex-col '>
                <button className={
                    isMessageVisible?
                    'border-b-[2px] border-white flex flex-col lg:flex-row min-h-[100px] border-opacity-10 relative  duration-500':
                    'border-b-[2px] border-white flex flex-col lg:flex-row min-h-[100px] border-opacity-0 relative '
                }>
                    <div className='lg:w-[200px] h-full flex items-center pt-[25px] lg:pt-0 pb-[10px] lg:pb-[0px]'>
                        <p className={
                            isMessageVisible?
                            'text-white font-RobotoFlex pl-[2px] duration-500':
                            'text-white font-RobotoFlex pl-[2px] pt-[25px] lg:pt-0 lg:-ml-[25px] opacity-0'
                        }>jhone@gmail.com</p>
                    </div>
                    <div className='lg:w-[400px] h-full flex items-center lg:ml-[50px] lg:pl-[25px] pb-[25px] lg:py-[25px] '>
                        <p className={
                            isMessageVisible?
                            'text-white font-RobotoFlex font-light text-left opacity-50 duration-500':
                            'text-white font-RobotoFlex font-light text-left lg:-ml-[50px] opacity-0'
                        }>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    </div>
                    <div className='absolute w-full h-full bg-opacity-0 hover:bg-opacity-75 bg-[#212437] flex opacity-0 hover:opacity-100 duration-300'>
                        <div className='w-[150px] bg-10 ml-auto flex items-center justify-center'>
                            <button className='w-1/2 text-center hover:scale-105'>
                                <AiOutlineCopy className='mx-auto text-3xl text-white'/>
                            </button>
                            <div className='h-[50px] w-[2.5px] bg-white opacity-25'></div>
                            <button className='w-1/2 text-center hover:scale-105'>
                                <MdDeleteOutline className='mx-auto text-3xl text-white'/>
                            </button>
                        </div>
                    </div>
                </button>
            </div>        
       </div>
    </div>
  )
}

export default MessageScreen
 


// <button className='border-b-[2px] border-white flex min-h-[100px] border-opacity-10 relative'>
//                     <div className='w-[100px] lg:w-[200px] h-full flex items-center'>
//                         <p className='text-white font-RobotoFlex pl-[2px]'>jhone@gmail.com</p>
//                     </div>
//                     <div className='w-[300px] lg:w-[400px] h-full flex items-center ml-[50px] pl-[25px]'>
//                         <p className='text-white font-RobotoFlex font-light text-left opacity-50'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
//                     </div>
//                     <div className='absolute w-full h-full bg-opacity-0 hover:bg-opacity-75 bg-[#212437] flex opacity-0 hover:opacity-100 duration-300'>
//                         <div className='w-[150px] bg-10 ml-auto flex items-center justify-center'>
//                             <button className='w-1/2 text-center hover:scale-105'>
//                                 <AiOutlineCopy className='mx-auto text-3xl text-white'/>
//                             </button>
//                             <div className='h-[50px] w-[2.5px] bg-white opacity-25'></div>
//                             <button className='w-1/2 text-center hover:scale-105'>
//                                 <MdDeleteOutline className='mx-auto text-3xl text-white'/>
//                             </button>
//                         </div>
//                     </div>
//                 </button>