import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function Login() {

  const [user , setUser] = useState({});
  const navigate = useNavigate()

  const handleChange=(event)=> {
    setUser ({
      ...user, 
      [event.target.name]:event.target.value
    })
  }

  const handleSubmit =async ()=> {
      let res = await fetch('http://localhost:3035/isAuth/login', {
        headers : {
          "content-type":"application/json",
        },
        method : 'POST',
        body : JSON.stringify(user),
      })
      const data = await res.json();
      const token= data.token;
      console.log(token);
     
      localStorage.setItem('token',JSON.stringify(token))
      navigate('/mytodos')
  }


  return (
    <div>
         <h2>Log in</h2>
         <input type="text" name='email' onChange={handleChange} /> <br />
         <input type="text" name='password' onChange={handleChange} /> <br />
         <input type="submit" onClick={handleSubmit}/>
    </div>
  )
}
