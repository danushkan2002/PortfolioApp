import React,{ useEffect } from 'react'
import {Navigate, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileDetails } from '../actions/userAction'

const PrivateRoute = () => {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProfileDetails())
    },[dispatch])
    
  return ( userInfo ? <Outlet/> : <Navigate to='/login'/>
    
  )
}

export default PrivateRoute