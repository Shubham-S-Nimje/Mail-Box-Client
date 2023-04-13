import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Signin from '../signin/Signin'
import './Home.css'

const Home = () => {
  const isauth = useSelector(state => state.auth.isAutenticate)

  return (
    <Fragment>
    {isauth && <div className='home'>
      <div className='homeleft'>right</div>
      <div className='homeright'>
      Emaildata
      </div>
    </div>}
    {!isauth && <Signin/>}
    </Fragment>
  )
}

export default Home
