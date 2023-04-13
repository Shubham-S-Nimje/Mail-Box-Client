import React, { Fragment } from 'react'
import './Leftbar.css'
const Leftbar = (props) => {
    const ComposemailHandler = (event) => {
        event.preventDefault();
        props.Setcomposemail(true)
        props.SetInboxmail(false)
        props.SetSentmail(false)
      }

      const InboxmailHandler = (event) => {
        event.preventDefault();
        props.Setcomposemail(false)
        props.SetInboxmail(true)
        props.SetSentmail(false)
      }

      const SentmailHandler = (event) => {
        event.preventDefault();
        props.Setcomposemail(false)
        props.SetInboxmail(false)
        props.SetSentmail(true)
      }
  return (
    <Fragment>
        <div className='composemail'>
        <button
        onClick={ComposemailHandler}
        >Compose Mail</button>
        </div>

        <div className='composemail'>
        <button
        onClick={InboxmailHandler}
        >Inbox</button>
        </div>

        <div className='composemail'>
        <button
        onClick={SentmailHandler}
        >Sent Mails</button>
        </div>
        </Fragment>
  )
}

export default Leftbar
