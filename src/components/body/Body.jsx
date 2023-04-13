import React from 'react'
import './Body.css'
import Signin from '../pages/signin/Signin'
import { useSelector } from 'react-redux'
import Home from '../pages/Home/Home'

const Body = () => {
  const isauth = useSelector(state => state.auth.isAutenticate)

  return (
    <div className='body'>
      {!isauth && <Signin/>}
      {isauth && <Home/> }
    </div>
  )
}

export default Body
