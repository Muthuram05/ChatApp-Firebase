import React from 'react'
import Img from '../img/user.jpg'

const Message = ()=>{
    return(
        <div className='message owner'>
           <div className="messageInfo">
                <img src={Img} alt="" />
                <span>Just now</span>
           </div>
           <div className="messageContent">
                <p>hello</p>
                <img src={Img} alt="" /> 
           </div>
        </div>
    )
}

export default Message