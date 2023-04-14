import React from 'react'
import { useState } from 'react';
import { Fragment } from 'react';
import { useEffect } from 'react';
import Leftbar from '../../body/Leftbar';

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
    {checkmail && <div className='inboxmails'>
    <div className='email'>{props.email}</div>
    <div className='subject'>{props.subject}</div>
    <div className='describtion'>{props.desc}</div>
    </div>}
    </Fragment>
  )
}

export default ViewmailData
