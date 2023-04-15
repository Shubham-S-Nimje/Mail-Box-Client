import React, { useEffect, useState } from "react";
import './Sentmail.css'
import Sentmaildata from "./Sentmaildata";

const Sentmails = () => {
  const [sentEmails,SetsentEmails] = useState([])
  const localId = localStorage.getItem('localId')
  // const email = localStorage.getItem('email')

  // const nameReplace = email.replace(/@.*$/,"");

  useEffect(()=> {
    fetch(`https://mail-box-client-6a44b-default-rtdb.firebaseio.com/${localId}sentmail.json`)
  .then(res => res.json())
  .then(data => SetsentEmails(data))
  },[localId])
  
  // console.log(sentEmails)


  return (
  <div>
    <h2 className="sentmail">Sent Mails</h2>
    {sentEmails && Object.keys(sentEmails).map((data, index) =>{
    return(
      <Sentmaildata key={index} sentEmails={sentEmails} email={sentEmails[data].Enteredsentmailto} desc={sentEmails[data].Enteredmaildescribtion}/>
      )
    })}
    {!sentEmails && <h2>No data found..</h2>}
    </div>)
};

export default Sentmails;
