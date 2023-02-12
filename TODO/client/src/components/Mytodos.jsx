import React, { useState } from 'react'

export default function Mytodos() {
    
  const[todos,setTodos] = useState({});
     
 
   const handleChange = (event)=> {
         
    setTodos ({
      ...todos, 
       [event.target.name]:event.target.value
    })
          
   }

   const Token = JSON.parse(localStorage.getItem('token'));

  const handleSubmit =async()=> {
    
    let res = await fetch('http://localhost:3035/mytodos/create', {
      headers : {
        "content-type":"application/json",
        "authorization": Token
      },
      method : 'POST',
      body : JSON.stringify(todos)
    })
     
    const data = await res.json();
    console.log(data);
    
   }

  return (
    <div>
      <h1>my Todos</h1>
      <input type="text" name='todo' onChange={handleChange}/> 
      <input type="submit" onClick={handleSubmit}/>
    </div>
  )
}
