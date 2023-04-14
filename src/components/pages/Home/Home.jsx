import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'
import Signin from '../signin/Signin'
import './Home.css'
import Composemail from '../composemail/Composemail'
import Leftbar from '../../body/Leftbar'
import Inboxmails from '../inbox/Inboxmail.jsx'
import Sentmails from '../sentmail/Sentmail.jsx'
import Viewmail from './Viewmail'

const Home = () => {
  const [Inboxmail, SetInboxmail] = useState(true);
  const [Sentmail, SetSentmail] = useState(false);
  const [composemail, Setcomposemail] = useState(false);
  const [viewmail, Setviewmail] = useState(false);
  const isauth = useSelector(state => state.auth.isAutenticate)
  const isseenmails = useSelector(state => state.seenunseenmails.isSeen)
  const isUnseenmails = useSelector(state => state.seenunseenmails.isUnseen)

  console.log(isseenmails,isUnseenmails)
  
  return (
    <Fragment>
    {isauth && <div className='home'>
    <div className='homeleft'>
      <Leftbar 
      isseenmails={isseenmails}
      isUnseenmails={isUnseenmails}
      Setcomposemail={Setcomposemail}
      SetInboxmail={SetInboxmail}
      SetSentmail={SetSentmail}
      Setviewmail={Setviewmail}
      />
      </div>
      <div className='homeright'>
        <div>{composemail && <Composemail 
        Setcomposemail={Setcomposemail}
        SetInboxmail={SetInboxmail}
        SetSentmail={SetSentmail}
        Setviewmail={Setviewmail}
      />}</div>
        <div>{Inboxmail && <Inboxmails 
        />}</div>
        <div>{Sentmail && <Sentmails
        />}</div>
        <div>{viewmail && <Viewmail
        />}</div>
      </div>
    </div>}
    {!isauth && <Signin/>}
    </Fragment>
  )
}

export default Home
