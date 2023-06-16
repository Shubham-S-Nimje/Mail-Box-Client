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
  const [unseenborder, Setunseenborder] = useState();
  const email = localStorage.getItem("email");
  const localId = localStorage.getItem("localId");
  const dispatch = useDispatch();
  const isseenmails = useSelector((state) => state.seenunseenmails.isSeen);
  const isUnseenmails = useSelector((state) => state.seenunseenmails.isUnseen);

  // console.log(props.Useremail[props.id])

  const nameReplace = email && email.replace(/@.*$/, "");

  const EmailViewHandler = () => {
    Nevigate({
      pathname: `/Mail-Box-Client/${localId}`,
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
      `https://mail-box-client-6a44b-default-rtdb.firebaseio.com/receivedmails/${nameReplace}/${props.Useremail}.json`,
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
        dispatch(SeenMailsAction.unseenclicked());
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    if (props.seen === "seen") {
      Setunseen("seenmails");
      Setunseenborder("greenborder");
    } else {
      Setunseen("unseenmails");
      Setunseenborder("redborder");
    }
  }, [EmailViewHandler]);

  useEffect(() => {
    if (props.email === email) {
      Setcheckmail(true);
    } else {
      Setcheckmail(false);
    }

    if (isseenmails === 0 || isUnseenmails === 0) {
      if (props.seen === "seen") {
        dispatch(SeenMailsAction.seen());
      } else {
        dispatch(SeenMailsAction.unseen());
      }
    }
  }, []);

  const OnRemoveHandler = () => {
    // console.log(props.Useremail);

    fetch(
      `https://mail-box-client-6a44b-default-rtdb.firebaseio.com/receivedmails/${nameReplace}/${props.Useremail}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log('Email Deleted Successfully!..');
        window.location.reload(true);

      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Fragment>
  {checkmail && (
    <div className={unseen ? "unseenmails" : "seenmails"} onClick={EmailViewHandler}>
      <div className={unseen ? "greenborder" : "redborder"}>{props.seen}</div>
      <div className="emaildata">
        <div className="email">From: {props.email}</div>
        <div className="describtion"> - {props.desc}</div>
      </div>
      <div className="removebutton"><button onClick={OnRemoveHandler}>X</button></div>
    </div>
  )}
</Fragment>

  );
};

export default Inboxmaildata;
