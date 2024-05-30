import React from 'react'
import Navbar from './Components/Navbar'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'
import Register from './screens/Register'
import Newticket from './screens/Newticket'
import Viewallticket from './screens/Viewallticket'
import Viewallusers from './screens/Viewallusers'
const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/new-tickets' element={<Newticket/>}/>
        <Route path='/all-tickets' element={<Viewallticket/>}/>
        <Route path='/all-users' element={<Viewallusers/>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App
