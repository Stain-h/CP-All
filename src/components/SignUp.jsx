import React, { useState } from 'react'
import { auth, user } from 'fbase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState(user);
  const [newAccount, setNewAccount] = useState(false);

  function onChange (e) {
    const { name, value } = e.target;
    if(name === 'email'){
      setEmail(value);
    }else if(name === 'password'){
      setPassword(value)
    }
  }

  const onHandleSubmit = async(e) => {
    e.preventDefault();
    try{
      let data;
      if(newAccount){
        data = await createUserWithEmailAndPassword(auth, email, password);
      }else{
        data = await signInWithEmailAndPassword(auth, email, password)
      }
    }catch(error){
      setError(error.message)
    }
    setCurrentUser(user);
  }
  
  const toggleAccount = () => setNewAccount((prev) => !prev)
  function onSocialLogin(e) {
    const { name } = e.target;
    let provider;
    if(name === 'google'){
      provider = new GoogleAuthProvider();
    }else{
      alert('not working')
    }
    const data = signInWithPopup(auth, provider);
    console.log(data);
  }

  const signUpForm = (
    <div className="wrap_form">
      <h2 className="tit_form">LOG IN</h2>
      <form action="#" onSubmit={onHandleSubmit} className="form">
        <div className="box_tf">
          <input type="email" name="email" placeholder="Email" onChange={onChange} className="tf_g" />
        </div>
        <div className="box_tf">
          <input type="password" name="password" placeholder="Password" onChange={onChange} className="tf_g" />
        </div>
        <div className="wrap_btn">
          <button type="button" className="btn" onClick={toggleAccount}>Toggle Account</button>
          <button type="submit" className="btn btn_submit">{newAccount ? 'Create Account' : 'Log in'}</button>
          <button type="button" name="google" onClick={onSocialLogin} className="btn btn_google">Google Login</button>
        </div>
        <p>{error}</p>
      </form>
    </div>
  )
  const mypage = (
    <div>
      dmdkdkdkdk
    </div>
  )

  return (
    <div className="content cont_user">
      {console.log(user)}
      {currentUser ? mypage : signUpForm}
    </div>
  )
}