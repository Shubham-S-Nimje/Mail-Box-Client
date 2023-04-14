import React, { useEffect, useState } from "react";
import "./Inboxmail.css";
import Inboxmaildata from "./Inboxmaildata";

const Inboxmails = () => {
  const [inboxEmails, SetinboxEmails] = useState([]);
  const localId = localStorage.getItem("localId");
  const email = localStorage.getItem("email");

  useEffect(() => {
    fetch(
      'https://mail-box-client-6a44b-default-rtdb.firebaseio.com/sentmails.json'
    )
      .then((res) => res.json())
      .then((data) => SetinboxEmails(data));
  }, []);

  console.log(inboxEmails);

  return (
    <div>
      <h2 className="inboxmail">Inbox</h2>
      {inboxEmails &&
        Object.keys(inboxEmails).map((data, index) => {
          return (
            <Inboxmaildata
              key={index}
              inboxEmails={inboxEmails}
              email={inboxEmails[data].Enteredsentmailto}
              desc={inboxEmails[data].Enteredmaildescribtion}
            />
          );
        })}
      {!inboxEmails && <h2>No data found..</h2>}
    </div>
  );
};

export default Inboxmails;
