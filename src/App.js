import React, { useState, useEffect } from 'react'
import GlobalStyles from "GlobalStyles";
import Router from "Router";
import Layout from "Layout"
import SearchForm from 'components/SearchForm';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from 'fbase';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import MapContainer from 'containers/MapContainer';

const tag = 'App->'

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState([]);

  // FireStore Set
  async function fetchData() {
    const database = getFirestore(); 
    const campRef = collection(database, "places")
    const q = query(campRef, where('id', '<=', 20))
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setData(data.push(doc.data()))
    })
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
      <MapContainer data={data}/>
    </>
  );
}

export default App;
