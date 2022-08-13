import {Navigate, Outlet } from 'react-router-dom'
import React, { useState } from 'react'

const UnPrivateRoute = () => {
    const [user] = useState(false)
    const [superAdmin] = useState(false)
  return (
    user && superAdmin ? <Outlet/> : <Navigate to={'/'}/>
  )
}

export default UnPrivateRoute
