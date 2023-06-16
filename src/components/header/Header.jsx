import React from 'react'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../store/Auth-action'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const isAuth = useSelector(state => state.auth.isAutenticate)
  const Navigate = useNavigate();
  const dispatch = useDispatch()

  // const LoginHandler = (event) => {
  //   event.preventDefault();
  //   // dispatch(authActions.login());
  // }

  const LogoutHandler = (event) => {
    event.preventDefault();
    Navigate('/Mail-Box-Client/signin')
      localStorage.setItem('localId','')
      localStorage.setItem('idToken','')
      localStorage.setItem('email','')
      // console.log('User signout Successfully')
    dispatch(authActions.logout());
  }

return (
  <div className="header">
    <Link to="/Mail-Box-Client">
    <h3>Mail Box Client</h3>
    </Link>
    <div className="headerright">
      {isAuth && <button>Profile</button>}

  {!isAuth && <Link to="/signin">
    <button
  // onClick={LoginHandler}
  >Login</button>
  </Link>}

      {isAuth && <button
      onClick={LogoutHandler}
      >Logout</button>}
      <button>ThemeChange</button>
    </div>
  </div>
);
}

export default Header
