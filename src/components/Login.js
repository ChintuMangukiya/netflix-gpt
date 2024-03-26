import React, { useRef, useState } from "react";
import Header from "./Header";
import { Validate } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail 
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(null);

  const nevigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const forgotPassword = () => {
    const message = Validate(email.current.value);
    setError(message);

    if(message !== null) return;

    sendPasswordResetEmail(auth, email.current.value)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }

  const onsubmit = () => {
    const message = Validate(email.current.value, password.current.value);
    setError(message);

    if (message !== null) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          nevigate("/browse");
          alert("welcome "+ name.current.value + " You have successfully signed up,,,");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setError("Invalid credentials");
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          nevigate("/browse");
          alert(" You have successfully signed in,,,");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setError("Email or Password didn't match");
        });
    }
  };

  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="Login">
      <div className="inner_Login">
        <Header></Header>
        <div className="form">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <h1 className="sign">{isSignIn ? "Sign In" : "Sign Up"}</h1>
            {!isSignIn && (
              <input ref={name} type="text" placeholder="Enter Your Name"></input>
            )}
            <input
              ref={email}
              type="text"
              placeholder="Enter Your Email"
            ></input>
            <input
              ref={password}
              type="password"
              placeholder="Enter Password"
            ></input>{" "}
            {error && <p className="invalid">{error}</p>}
            <button
              type="submit"
              onClick={() => {
                onsubmit();
              }}
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <div className="between">
            <p className="signUpText">
              {isSignIn ? "new to Netflix ?" : "Already have an account ? "}
              <span
                 className="sign"
                onClick={() => {
                  toggleSignIn();
                }}
              >
                {!isSignIn ? "Sign In" : "Sign Up"}
              </span>
            </p>
            <p onClick={()=>{
              forgotPassword();
            }} className="forgot">{isSignIn ? "forgot password" : " "}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
