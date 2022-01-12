import React, { useEffect } from 'react'
import GlobalStyles from "GlobalStyles";
import Router from "Router";
import initMap from 'utils/maps'
import SearchForm from 'components/SearchForm';

function App() {
  useEffect(() => {
    initMap();
  }, [])
  return (
    <>
      <GlobalStyles />
      <Router />
      <SearchForm />
      <div id="cp-map" style={{ width:"100%", height:"100vh" }}></div>
    </>
  );
}

export default App;
