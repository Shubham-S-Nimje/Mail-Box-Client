import React from 'react'
import { useState } from 'react';
import { Fragment } from 'react';
import { useEffect } from 'react';
import './Viewmaildata.css'

const ViewmailData = (props) => {
  const [checkmail, Setcheckmail] = useState(false)

  useEffect(()=> {
    if(props.inboxEmails === props.Useremail){
      Setcheckmail(true)
    }
    else{
      Setcheckmail(false)
    }
  },[])

  // console.log(props.Useremail[props.id])
 
  return (
    <Fragment>
    {checkmail && <div className='viewmails'>
    <div className='email'>Email : {props.email}</div>
    <div className='subject'>Subject : {props.subject}</div>
    <div className='describtion'>Describtion : {props.desc}</div>
    </div>}
    </Fragment>
  )
}

export default ViewmailData
