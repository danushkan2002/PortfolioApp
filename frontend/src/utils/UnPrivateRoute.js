import {Navigate, Outlet } from 'react-router-dom'
import React, { useState , useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getProfile } from '../actions/UserActions'

const UnPrivateRoute = () => {
    const userProfile = useSelector(state => state.userProfile)
    const { user } = userProfile

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    useEffect(() => {
        if (userInfo) {
            dispatch(getProfile())
            console.log('ji')
        } else {
            dispatch(getProfile())
        }
    }, [dispatch, userInfo]);
  return (
    !user ? <Outlet/> : <Navigate to={'/'}/>
  )
}

export default UnPrivateRoute
