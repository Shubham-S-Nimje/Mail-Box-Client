import React, { useRef, useState } from "react";
import "./Composemail.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";

const Composemail = (props) => {
  const sentmailto = useRef();
  const mailsubject = useRef();
  const maildescribtion = useRef();

  const localId = localStorage.getItem("localId");

  const SentmailHandler = (event) => {
    event.preventDefault();
    const Enteredsentmailto = sentmailto.current.value;
    const Enteredmailsubject = mailsubject.current.value;
    const Enteredmaildescribtion = maildescribtion.current.value;

    const maildata = {
      Enteredsentmailto,
      Enteredmailsubject,
      Enteredmaildescribtion,
    };


    fetch(
      `https://mail-box-client-6a44b-default-rtdb.firebaseio.com/${localId}.json`,
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
        console.log(data);
        props.Setcomposemail(false);
        props.SetInboxmail(false);
        props.SetSentmail(true);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  
  const [editorState, setEditorState] = useState(() =>
  EditorState.createEmpty());
  const updateTextDescription = async (state) => {
    await setEditorState(state);
    const data = convertToRaw(editorState.getCurrentContent());
    console.log(data)
  };


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
            editorState={editorState}
onEditorStateChange={updateTextDescription}
            ref={maildescribtion}
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