import React, { useRef } from "react";
import "./Signin.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/Auth-action";

const Signin = () => {
  const EnteredUserEmail = useRef();
  const EnteredPassword = useRef();
  const Nevigate = useNavigate();
  const dispatch = useDispatch()

  const SigninHandler = (event) => {
    event.preventDefault();
    const enteredemail = EnteredUserEmail.current.value;
    const enteredpassword = EnteredPassword.current.value;

    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCub7rCaOYXA7xS_pJ9MxPA1czVkNzemas',
  {
    method: 'POST',
    body: JSON.stringify({
      email: enteredemail,
      password: enteredpassword,
      returnSecureToken: true
    }),
    headers: {
      "Content-Type": 'application/json'
    }
  }
    ).then((res) => {
      if(res.ok) {
        return res.json();
      }
      else{
        return res.json().then((data) => {
          let errorMessage = 'Please Check Your Email/Password';
          throw new Error(errorMessage);
        });
      }
    }).then((data) => {
      console.log(data);
      Nevigate('/')
      localStorage.setItem('localId',data.localId)
      localStorage.setItem('idToken',data.idToken)
      localStorage.setItem('email',data.email)
      console.log('User signin Successfully')
      dispatch(authActions.login());
    }).catch(err => {
      alert(err.message);
    });
};

  return (
    <div className="signin">
      <h2>SignIn</h2>
      <form onSubmit={SigninHandler}>
        <div>
          <label>Enter Email : </label>
          <input type="email"
          required
          autoComplete="on"
          ref={EnteredUserEmail}
          ></input>
        </div>
        <div>
          <label>Enter Passward : </label>
          <input
            type="text"
            required
            ref={EnteredPassword}
          ></input>
        </div>

        <button>Signin</button>
        <p>Don't have account?</p>
        <Link to="/signup">
          <button>Create new account</button>
        </Link>
      </form>
    </div>
  );
};

export default Signin;
