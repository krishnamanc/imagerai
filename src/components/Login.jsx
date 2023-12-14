import React from 'react';
import { Auth, Provider } from '../firebase-config';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigator = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(Auth, Provider);
      console.log(result);
      navigator('/');
    } catch (error) {
      console.error(error);
    }
  };

  const signInWithEmailAndPasswordHandler = async () => {
    try {
      const email = '1234@bunny.com'; // Replace with the actual email
      const password = '123456'; // Replace with the actual password

      await signInWithEmailAndPassword(Auth, email, password);
      navigator('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='login-page'>
      <h2>Login Here!</h2>
      <button className='button' onClick={signInWithGoogle}>
        Sign In With Google
      </button>
      <button className='button' onClick={signInWithEmailAndPasswordHandler}>
        Sign In With Email/Password
      </button>
    </div>
  );
};

export default Login;
