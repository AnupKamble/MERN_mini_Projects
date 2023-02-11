import React, { useState } from 'react'

export default function Mytodos() {
    
  const[todos,setTodos] = useState({});
     
 
   const handleChange = (event)=> {
         
    setTodos ({
      ...todos, 
       [event.target.name]:event.target.value
    })
          
   }
  const handleSubmit =async()=> {

    let res = await fetch('http://localhost:3035/mytodos/create', {
      headers : {
        "content-type":"application/json",
        "authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2M2U3Y2JiMTc0MWRmY2Q1ZmYyYzIyOTkiLCJpYXQiOjE2NzYxMzk3MDZ9.bcu1MgfMKC3fMwHen1XgdCt0wYukNdMYzbqTwPGUlIY"
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
