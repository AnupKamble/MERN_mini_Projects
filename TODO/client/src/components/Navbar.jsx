
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (

    <div>
          <nav>
              <ul>
                 <li>
                    <Link to="/"> Home </Link>
                 </li>
                 <li>
                 <Link to="/signup"> Signup </Link>
                 </li>

                 <li>
                 <Link to="/login"> Login </Link>
                 </li>

                 <li>
                 <Link to="/mytodos"> Todos </Link>
                 </li>
              </ul>
          </nav>
    </div>
  )
}
