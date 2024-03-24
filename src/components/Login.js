import React, { useState } from 'react';
import Header from './Header';

const Login = () => {

  const [ isSignIn, setIsSignIn ] = useState(true);
  const toggleSignIn = () =>{
    setIsSignIn(!isSignIn);
  }
  return (
    <div className="Login">
      
      <div className="inner_Login">
         <Header></Header>
         <div className='form'>
         <form>
          <h1 className='sign'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
          {!isSignIn && <input type='text' placeholder='Enter Your Name'></input>}
          <input type='text' placeholder='Enter Your Email'></input>
          <input type='password' placeholder='Enter Password'></input>
          <button type='submit'>{isSignIn ? "Sign In" : "Sign Up"}</button>
          <p className='signUpText'>{isSignIn ? "new to Netflix ?" : "Already have an account ? "}
            <span onClick={()=>{
            toggleSignIn();
          }}>{isSignIn ? "Sign In" : "Sign Up"}</span></p>
         </form>
         </div>
      </div>
    </div>
  )
}

export default Login;
