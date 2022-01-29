import React, { useState, useEffect } from 'react'
import GlobalStyles from "GlobalStyles";
import Router from "Router";
import Layout from "Layout"
import SearchForm from 'components/SearchForm';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from 'fbase';
import initMap from 'utils/maps';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import MapContainer from 'containers/MapContainer';

const tag = 'App->'

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [db, setDb] = useState([]);

  // FireStore Set
  const getDB = async() => {
    const database = getFirestore(); 
    const campRef = collection(database, "places")
    const q = query(campRef, where('id', '<=', 20))
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setDb(db.push(doc.data()))
    })
  }

  useEffect(() => {
    getDB();
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
      <MapContainer data={db}/>
    </>
  );
}

export default App;
