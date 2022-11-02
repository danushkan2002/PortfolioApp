import React,{ useEffect } from 'react'
import {Navigate, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileDetails } from '../actions/userAction'

const PrivateRoute = () => {
    const userProfile = useSelector(state => state.userProfile)
    const { user } = userProfile

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProfileDetails())
    },[dispatch])
  return ( user || userInfo ? <Outlet/> : <Navigate to='/login'/>
    
  )
}

export default PrivateRoute