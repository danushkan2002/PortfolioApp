import React from 'react'
import Navbar from './componets/Navbar'
import { HashRouter as Router , Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import MessageScreen from './screens/MessageScreen'
import PrivateRoute from './utils/PrivateRoute'
import UnPrivateRoute from './utils/UnPrivateRoute'



const App = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomeScreen/>}/>
          <Route element={<PrivateRoute/>}>
            <Route path='/Messages' element={<MessageScreen/>}/>
          </Route>
          <Route element={<UnPrivateRoute/>}>
            <Route path='/Login' element={<LoginScreen/>}/>
          </Route>
          
          
        </Routes>
    </Router>
  )
}

export default App
