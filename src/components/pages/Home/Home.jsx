import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'
import Signin from '../signin/Signin'
import './Home.css'
import Composemail from '../composemail/Composemail'
import Leftbar from '../../body/Leftbar'
import Inboxmails from '../inbox/Inboxmail.jsx'
import Sentmails from '../sentmail/Sentmail'

const Home = () => {
  const [Inboxmail, SetInboxmail] = useState(true);
  const [Sentmail, SetSentmail] = useState(false);
  const [composemail, Setcomposemail] = useState(false);
  const isauth = useSelector(state => state.auth.isAutenticate)
  
  return (
    <Fragment>
    {isauth && <div className='home'>
    <div className='homeleft'>
      <Leftbar 
      Setcomposemail={Setcomposemail}
      SetInboxmail={SetInboxmail}
      SetSentmail={SetSentmail}
      />
      </div>
      <div className='homeright'>
        <div>{composemail && <Composemail 
        Setcomposemail={Setcomposemail}
      SetInboxmail={SetInboxmail}
      SetSentmail={SetSentmail}
      />}</div>
        <div>{Inboxmail && <Inboxmails/>}</div>
        <div>{Sentmail && <Sentmails/>}</div>
      </div>
    </div>}
    {!isauth && <Signin/>}
    </Fragment>
  )
}

export default Home
