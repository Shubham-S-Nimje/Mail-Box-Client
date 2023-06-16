import React, { useRef, useState } from "react";
import "./Composemail.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Composemail = (props) => {
  const sentmailto = useRef();
  const mailsubject = useRef();
  const [Entereddescription, setEntereddescription] = useState('');

  const localId = localStorage.getItem("localId");
  const Email = localStorage.getItem("email");

  const updateTextDescription = (event) => {
    setEntereddescription(event.blocks[0].text);
    
  };

  const SentmailHandler = (event) => {
    event.preventDefault();
    const Enteredsentmailto = sentmailto.current.value;
    const Enteredmailsubject = mailsubject.current.value;
    // const Enteredmaildescribtion = maildescribtion.current.value;
    const Enteredmaildescribtion = Entereddescription;

    const seen = "unseen";

    const maildata = {
      Enteredsentmailto,
      Enteredmailsubject,
      Enteredmaildescribtion,
      seen,
    };

    const nameReplace = Enteredsentmailto.replace(/@.*$/, "");
    // console.log(nameReplace)

    
    fetch(
      `https://mail-box-client-6a44b-default-rtdb.firebaseio.com/sentmails/${localId}.json`,
      {
        method: "POST",
        body: JSON.stringify(maildata),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        props.Setcomposemail(false);
        props.Setcomposemail(false);
        props.SetInboxmail(false);
        props.SetSentmail(true);
        props.Setviewmail(false);
      })
      .catch((err) => {
        alert(err.message);
      });

    
    fetch(
      `https://mail-box-client-6a44b-default-rtdb.firebaseio.com/receivedmails/${nameReplace}.json`,
      {
        method: "POST",
        body: JSON.stringify(maildata),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log("sentmails", data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  
// console.log(Entereddescription)

  return (
    <div className="composemail">
      <h2>Compose Mail</h2>
      <form onSubmit={SentmailHandler}>
        <div>
          <label>To : </label>
          <input type="email" ref={sentmailto} required></input>
        </div>
        <div>
          <label>Subject : </label>
          <input type="text" ref={mailsubject} required></input>
        </div>
        <div className="text">
          <Editor
            type="text"
            value={Entereddescription}
            onChange={updateTextDescription}
            editorClassName="editor"
            required
          />
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Composemail;
