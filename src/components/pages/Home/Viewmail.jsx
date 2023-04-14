import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ViewmailData from './Viewmaildata';

const Viewmail = (props) => {
    const [emaildata] = useSearchParams()
    const Useremail = emaildata.get("emailid");
    const email = localStorage.getItem("email");
    const nameReplace = email.replace(/@.*$/,"");
    
    // console.log(Useremail)
    
    const [inboxEmails, SetinboxEmails] = useState([]);
  useEffect(() => {
    fetch(
      `https://mail-box-client-6a44b-default-rtdb.firebaseio.com/${nameReplace}receivedmail.json`
    )
      .then((res) => res.json())
      .then((data) => SetinboxEmails(data));
  }, []);

  return (
    <div>
      <h2 className="inboxmail">View Mail</h2>
      {inboxEmails &&
        Object.keys(inboxEmails).map((data, index) => {
          return (
            <ViewmailData
              key={index}
              id={index}
              inboxEmails={data}
              Useremail={Useremail}
              email={inboxEmails[data].Enteredsentmailto}
              subject={inboxEmails[data].Enteredmailsubject}
              desc={inboxEmails[data].Enteredmaildescribtion}
            />
          );
        })}
      {!inboxEmails && <h2>No data found..</h2>}
    </div>
  )
}

export default Viewmail
