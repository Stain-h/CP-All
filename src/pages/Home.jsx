import React, { useEffect } from 'react'
import Header from 'components/Header';
import SearchForm from 'components/SearchForm';
import initMap from 'utils/maps'

export default function Home() {
  useEffect(() => {
    initMap();
  }, [])
  
  return (
    <main style={{ position: 'relative' }}>
      <Header />
      <SearchForm />
      <div id="cp-map" style={{ width:"100%", height:"100vh" }}></div>
    </main>
  )
}


