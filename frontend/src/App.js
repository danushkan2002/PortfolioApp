import React from 'react'
import Navbar from './componets/Navbar'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import Page  from './componets/Page'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

const App = () => {
  return (
    <Router>
      <Page>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/Login' element={<LoginScreen/>}/>
          <Route path='/Register' element={<RegisterScreen/>}/>
        </Routes>
      </Page>
    </Router>
  )
}

export default App
