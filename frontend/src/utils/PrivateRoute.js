import {Navigate, Outlet } from 'react-router-dom'
import React, { useState , useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getProfile } from '../actions/UserActions'

const PrivateRoute = () => {
    const userProfile = useSelector(state => state.userProfile)
    const { user } = userProfile

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProfile())
    }, [dispatch]);
  return (
    user ? <Outlet/> : <Navigate to={'/'}/>
  )
}

export default PrivateRoute
