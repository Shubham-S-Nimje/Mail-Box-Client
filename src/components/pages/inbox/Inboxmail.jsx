import React, { useEffect, useState } from "react";
import "./Inboxmail.css";
import Inboxmaildata from "./Inboxmaildata";

const Inboxmails = (props) => {
  const [inboxEmails, SetinboxEmails] = useState();
  const email = localStorage.getItem("email");
  const nameReplace = email.replace(/@.*$/,"");

  useEffect(() => {
    fetch(
      `https://mail-box-client-6a44b-default-rtdb.firebaseio.com/${nameReplace}receivedmail.json`
    )
      .then((res) => res.json())
      .then((data) => SetinboxEmails(data));
  }, []);

  // console.log(inboxEmails);

  return (
    <div>
      <h2 className="inboxmail">Inbox</h2>
      {inboxEmails &&
        Object.keys(inboxEmails).map((data, index) => {
          return (
            <Inboxmaildata
            key={index}
            id={index}
            seen={inboxEmails[data].seen}
            inboxEmails={inboxEmails}
            Useremail={data}
            email={inboxEmails[data].Enteredsentmailto}
            subject={inboxEmails[data].Enteredmailsubject}
            desc={inboxEmails[data].Enteredmaildescribtion}
            />
          );
        })}
      {!inboxEmails && <h2>No data found..</h2>}
    </div>
  );
};

export default Inboxmails;
