
import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom';

export default function Signup() {

  const [input,setInput]=useState({});

  const navigate = useNavigate();;

 const handleChange =(event)=> {
   setInput ({
     ...input, 
      [event.target.name]:event.target.value
   })
 }
//  console.log(input);

  const handleSubmit = async ()=> {

    let res = await fetch('http://localhost:3035/isAuth/signup', {
      
    headers : {
      "content-type":"application/json"
    },
    method : 'POST',
    body : JSON.stringify(input)
    })
     const data = await res.json();
     console.log(data);
     navigate("/login")

  }

  return (
    <div>
       <h1>Signuppage</h1>
        <div>
            <input type="text" name="name" onChange={handleChange}/>
            <input type="text" name="gender" onChange={handleChange}/>
            <input type="text" name="email" onChange={handleChange}/>
            <input type="text" name="password" onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit}>Sign up</button>
        </div>
      
    </div>
  )
}
