import React from 'react'
import './Inboxmaildata.css'
import { useState } from 'react';
import { Fragment } from 'react';
import { useEffect } from 'react';

const Inboxmaildata = (props) => {
  const [checkmail, Setcheckmail] = useState(false)
  const email = localStorage.getItem("email");
  useEffect(()=> {
    if(props.email === email){
      Setcheckmail(true)
    }
    else{
      Setcheckmail(false)
    }
  },[])
 
  return (
    <Fragment>
    {checkmail && <div className='inboxmails'>
    <div className='email'>{props.email}</div>
    <div className='describtion'>{props.desc}</div>
    <button>Remove</button>
    </div>}
    </Fragment>
  )
}

export default Inboxmaildata
