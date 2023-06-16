import React from "react";
import "./Sentmaildata.css";

const Sentmaildata = (props) => {
  return (
    <div
      className={"seenmails"}
    >
      <div className={"redborder"}>seen</div>
      <div className="sentmails">
        <div className="email">To: {props.email}</div>
        <div className="describtion"> - {props.desc}</div>
      </div>
    </div>
  );
};

export default Sentmaildata;
