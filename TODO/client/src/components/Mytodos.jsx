import React, { useEffect, useState } from 'react'

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



   const [showTodos,setShowTodos] = useState([]);

    const fetchTodo = async ()=> {
         
        let res = await fetch('http://localhost:3035/mytodos');
        let tdata = await res.json();
  
        console.log(tdata);
        setShowTodos(tdata)
     }
      
     useEffect(()=> {
          fetchTodo();
     },[])
  

 


  return (
    <>

    <div>
      <h1>my Todos</h1>
      <input type="text" name='todo' onChange={handleChange}/> 
      <input type="submit" onClick={handleSubmit}/>
    </div>

    {     showTodos.map((ele,i)=> {
                  
                return <div key={i}>
                      <h4>{ele.todo}</h4>
                      <h4>{ele.status}</h4>
                    </div>
            })
     }
     

    </>
  )
}
