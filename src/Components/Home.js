import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Home() {
const navi = useNavigate()
const [data, setData] = useState()
// const {name} = data
const API = "http://localhost:7070/user/register"
axios.get(API)
.then(res=>{
  console.log(res);

})
.catch(err=>console.log(err))
   
  return (
    <div className='home'> 

<div className='logout'><button onClick={()=>navi('/')} className='homeLogOut'>Logout</button></div>
       <div className='hText'> <h1 >Welcome to our store</h1></div>
    <div className="hBody"><img className="homeImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk6NVhqKlOSqEt6YMZ2tZ-tOWCLFFFs61_-g&usqp=CAU" alt="no img"/></div>

    </div>
  )
}

export default Home

