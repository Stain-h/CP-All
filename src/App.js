import React, { useState, useEffect } from 'react'
import GlobalStyles from "GlobalStyles";
import Router from "Router";
import Layout from "Layout"
import SearchForm from 'components/SearchForm';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from 'fbase';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import MapContainer from 'containers/MapContainer';
import { useDispatch } from 'react-redux';
import { initMaps } from 'redux/modules/places'

const tag = 'App->'

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();

  // FireStore Set
  async function fetchData() {
    const database = getFirestore(); 
    const campRef = collection(database, "places")
    const q = query(campRef, where('id', '<=', 20))
    const querySnapshot = await getDocs(q);
    let array  = [];

    querySnapshot.forEach((doc) => {
      array.push(doc.data())
    })
    dispatch(initMaps(array))
  }

  useEffect(() => {
    fetchData();
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
      <MapContainer />
    </>
  );
}

export default App;
