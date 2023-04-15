import React from 'react'
import './Sentmaildata.css'

const Sentmaildata = (props) => {
  return (
    <div className='sentmails'>
    <div className='email'>{props.email}</div>
    <div className='describtion'>{props.desc}</div>
    </div>
  )
}

export default Sentmaildata
