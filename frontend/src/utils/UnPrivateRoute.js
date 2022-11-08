import React,{ useEffect } from 'react'
import {Navigate, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileDetails } from '../actions/userAction'

const UnPrivateRoute = () => {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProfileDetails())
    },[dispatch])

  return (!userInfo ? <Outlet/> : <Navigate to='/'/>
    
  )
}

export default UnPrivateRoute