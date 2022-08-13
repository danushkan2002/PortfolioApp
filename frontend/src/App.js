import React from 'react'
import Navbar from './componets/Navbar'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import Page  from './componets/Page'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import PrivateRoute from './utils/PrivateRoute'
import UnPrivateRoute from './utils/UnPrivateRoute'



const App = () => {
  return (
    <Router>
      <Page>
      <Navbar/>
        <Routes>
          <Route element={<PrivateRoute/>}>
            <Route path='/Profile' element={<HomeScreen/>}/>
          </Route>
          <Route element={<UnPrivateRoute/>}>
            <Route path='/Login' element={<LoginScreen/>}/>
            <Route path='/Register' element={<RegisterScreen/>}/>
          </Route>
          <Route path='/' element={<HomeScreen/>}/>
          
          
        </Routes>
      </Page>
    </Router>
  )
}

export default App
