import React, { Fragment } from 'react'
import './Leftbar.css'
import { useSelector } from 'react-redux'
const Leftbar = (props) => {
  const isseenmails = useSelector(state => state.seenunseenmails.isSeen)
  const isUnseenmails = useSelector(state => state.seenunseenmails.isUnseen)
  const totalmails = localStorage.getItem('totalmails')

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
        >Inbox ({isUnseenmails - 1}/{totalmails-1})</button>
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
