import React, { useState, useEffect } from 'react'
import GlobalStyles from "GlobalStyles";
import Router from "Router";
import Layout from "Layout"
import SearchForm from 'components/SearchForm';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from 'fbase';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        setIsLoggedIn(true)
      }else{
        setIsLoggedIn(false)
      }
      setInit(true)
    })
  }, [])
  return (
    <>
      <GlobalStyles />
      <Layout>{init ?  <Router isLoggedIn={isLoggedIn} />  : 'initializing...'}</Layout>
      <SearchForm />
      <div id="cp-map" style={{ width:"100%", height:"100vh" }}></div>
    </>
  );
}

export default App;
