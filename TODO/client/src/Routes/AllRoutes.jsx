import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import Mytodos from '../components/Mytodos'
import Navbar from '../components/Navbar'
import Signup from '../components/Signup'

export default function AllRoutes() {
  return (


    <div>
             <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/login'element={<Login/>} />
                <Route path='/mytodos' element={<Mytodos/>} />
            </Routes>
      
    </div>
  )
}
