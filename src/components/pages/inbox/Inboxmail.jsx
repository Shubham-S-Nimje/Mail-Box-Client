import React, { useEffect, useState } from "react";
import "./Inboxmail.css";
import Inboxmaildata from "./Inboxmaildata";
import useFetchdata from "../../../store/Fetchdata";

const Inboxmails = (props) => {
  const [inboxEmails, SetinboxEmails] = useState();
  const email = localStorage.getItem("email");
  const nameReplace = email && email.replace(/@.*$/,"");

  const [newdata] = useFetchdata(`https://mail-box-client-6a44b-default-rtdb.firebaseio.com/receivedmails/${nameReplace}.json`);

  useEffect(() => {
    if (newdata) {
      const totalMails = Object.keys(newdata).length;
      localStorage.setItem("totalmails", totalMails.toString());
    }
  }, [newdata]);

    useEffect(() => {
      SetinboxEmails(newdata)
    }, [newdata]);

  // setTimeout(() => {
    // fetch(
    //   `https://mail-box-client-6a44b-default-rtdb.firebaseio.com/${nameReplace}receivedmail.json`
    // )
    //   .then((res) => res.json())
    //   .then((data) => SetinboxEmails(data));

      // console.log(newdata)
  // }, 2000);

  // useEffect(() => {
  //   fetch(
  //     `https://mail-box-client-6a44b-default-rtdb.firebaseio.com/${nameReplace}receivedmail.json`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => SetinboxEmails(data));
  // }, []);

  // console.log(newdata);
  newdata && localStorage.setItem('unseenCount',Object.values(newdata).filter((item) => item.seen === "unseen").length)
// console.log(unseenCount); // Output: 1

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
