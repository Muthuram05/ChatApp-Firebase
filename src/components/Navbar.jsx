import React from 'react'
import Img from "../img/user.jpg"
const Navbar = ()=>{
    return(
        <div className='navbar'>
           <span className="logo">
            Connection
           </span>
           <div className='user'>
                <img src={Img} alt="" />
                <span>Ram</span>
                <button>logout</button>
           </div>
        </div>
    )
}

export default Navbar