import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Home() {

  const navigate = useNavigate();

  return (
    <div>

        <h1> Welcome to My Todo</h1>
       
 
        <button onClick={() => {
            navigate("/login")
        }}>Login</button>
        <button onClick={() => {
            navigate("/signup")
        }}>Signup</button>
 
      
    </div>
  )
}
