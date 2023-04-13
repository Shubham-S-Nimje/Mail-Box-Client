import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const EnteredUsername = useRef();
  const EnteredUserEmail = useRef();
  const EnteredPassword = useRef();
  const ConfirmPassword = useRef();
  const Nevigate = useNavigate();

  const SignupHandler = (event) => {
    event.preventDefault();
    const enteredusername = EnteredUsername.current.value;
    const enteredemail = EnteredUserEmail.current.value;
    const enteredpassword = EnteredPassword.current.value;
    const confirmpassword = ConfirmPassword.current.value;

    if(enteredpassword === confirmpassword){
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCub7rCaOYXA7xS_pJ9MxPA1czVkNzemas",
        {
          method: "POST",
          body: JSON.stringify({
            username: enteredusername,
            email: enteredemail,
            password: enteredpassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = "Authentication failed";
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          console.log(data);
          Nevigate("/signin");
          console.log("User signup Successfully");
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    else{
      alert('Oops!.. Your Passward not matching')
    }
  };

  return (
    <div className="signin">
      <h2>SignUp</h2>
      <form onSubmit={SignupHandler}>
        <div>
          <label>Enter Username : </label>
          <input type="text" required ref={EnteredUsername}></input>
        </div>
        <div>
          <label>Enter Email : </label>
          <input type="email" required ref={EnteredUserEmail}></input>
        </div>
        <div>
          <label>Enter Password : </label>
          <input type="text" ref={EnteredPassword} required></input>
        </div>
        <div>
          <label>Confirm Password : </label>
          <input type="text" ref={ConfirmPassword} required></input>
        </div>

        <button type="submit">Signup</button>
        <p>Already have account?</p>
        <Link to="/signin">
          <button>Login to existing account</button>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
