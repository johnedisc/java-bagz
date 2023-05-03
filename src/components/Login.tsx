import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const loginStyle = {
  alignItems: "center",
  gap: "2em",
  justifyContent: "flex-start"
}

export const Login = () => {
  const [signUpSuccess, setSignUpSuccess] = useState<string | null>(null);
  const [loginSuccess, setLoginSuccess] = useState<string | null>(null);
  const [logoutSucess, setLogoutSuccess] = useState<string | null>(null);


  const doSignup = (event: any) => {
    console.log(auth);
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignUpSuccess(`you have successfully signed up, ${userCredential.user.email}`);
      })
      .catch((error) => {
        setSignUpSuccess(`there was an error: ${error.message}`);
      });
  }

  const doLogin = (event: any) => {
    console.log('this is login');
    event.preventDefault();
    const email = event.target.loginEmail.value;
    const password = event.target.loginPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoginSuccess(`you have successfully logged in as, ${userCredential.user.email}`);

      })
      .catch((error) => {
        setLoginSuccess(`there was an error logging in: ${error.message}`);
      });
  }

  const doLogout = () => {
    signOut(auth)
      .then(() => {
        setLogoutSuccess('you have logged out.');
      })
      .catch((error) => {
        setLogoutSuccess(`there was an error logging out: ${error.message}`);
      });
  }

  return (
    <>
      <div className="flexed-down" style={loginStyle}>
        <h3>sign up, please</h3>
        {signUpSuccess}
        <form id="help-form" className="flexed-down" onSubmit={doSignup}>
          <input 
            type="text" 
            name="email" 
            placeholder="email" 
          /> 
          <input 
            type="password" 
            name="password" 
            placeholder="password"
          /> 
          <button type="submit">sign up</button>
        </form>
        <h3>sign in, please</h3>
        {loginSuccess}
        <form id="help-form" className="flexed-down" onSubmit={doLogin}>
          <input 
            type="text" 
            name="loginEmail" 
            placeholder="email" 
          /> 
          <input 
            type="password" 
            name="loginPassword" 
            placeholder="password"
          /> 
          <button type="submit">login</button>
        </form>
        <h3>depart</h3>
        {logoutSucess}
        <button onClick={doLogout}>log out</button>
      </div>
    </>
  );
}
