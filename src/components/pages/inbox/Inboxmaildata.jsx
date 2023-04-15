import React from "react";
import "./Inboxmaildata.css";
import { useState } from "react";
import { Fragment } from "react";
import { useEffect } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SeenMailsAction } from "../../../store/Seen-Unseenmails";

const Inboxmaildata = (props) => {
  const Nevigate = useNavigate();
  const [checkmail, Setcheckmail] = useState(false);
  const [unseen, Setunseen] = useState();
  const email = localStorage.getItem("email");
  const localId = localStorage.getItem("localId");
  const dispatch = useDispatch();
  const isseenmails = useSelector((state) => state.seenunseenmails.isSeen);
  const isUnseenmails = useSelector((state) => state.seenunseenmails.isUnseen);
  const isData = useSelector((state) => state.seenunseenmails.data);

  // console.log(props.Useremail[props.id])

  const nameReplace = email.replace(/@.*$/, "");

  const EmailViewHandler = () => {
    Nevigate({
      pathname: `/${localId}`,
      search: createSearchParams({
        emailid: `${props.Useremail}`,
      }).toString(),
    });
    // console.log(props.desc)

    const Enteredsentmailto = props.email;
    const Enteredmailsubject = props.subject;
    const Enteredmaildescribtion = props.desc;
    const seen = "seen";

    const maildata = {
      Enteredsentmailto,
      Enteredmailsubject,
      Enteredmaildescribtion,
      seen,
    };

    fetch(
      `https://mail-box-client-6a44b-default-rtdb.firebaseio.com/${nameReplace}receivedmail/${props.Useremail}.json`,
      {
        method: "PUT",
        body: JSON.stringify(maildata),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    if (props.seen === "seen") {
      Setunseen("seenmails");
    } else {
      Setunseen("unseenmails");
    }
  }, [props.seen]);

  useEffect(() => {
    if (props.email === email) {
      Setcheckmail(true);
    } else {
      Setcheckmail(false);
    }

    if (isData) {
      if (props.seen === "seen") {
        dispatch(SeenMailsAction.seen());
      } else {
        dispatch(SeenMailsAction.unseen());
      }
    }
  }, []);

  const OnRemoveHandler = () => {
    console.log(props.Useremail);

    fetch(
      `https://mail-box-client-6a44b-default-rtdb.firebaseio.com/${nameReplace}receivedmail/${props.Useremail}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log('Email Deleted Successfully!..');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Fragment>
      {checkmail && (
        <div className={unseen}>
          <div className="emaildata" onClick={EmailViewHandler}>
            <div className="seen">{props.seen}</div>
            <div className="email">{props.email}</div>
            <div className="describtion">{props.desc}</div>
          </div>
          <button onClick={OnRemoveHandler}>Remove</button>
        </div>
      )}
    </Fragment>
  );
};

export default Inboxmaildata;
