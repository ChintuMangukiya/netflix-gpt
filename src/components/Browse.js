import React from 'react';
import Header from './Header';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Browse = () => {

  const navigate = useNavigate();


  const signout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='browse' >
      
      <div className='heading'><Header></Header>
      <button className='ss' onClick={()=>{
        signout();
      }}>Sign out</button>
    </div>
    </div>
  )
}

export default Browse;
