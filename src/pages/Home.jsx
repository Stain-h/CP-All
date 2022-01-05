import React, { useEffect } from 'react'
import initMap from '../utils/maps'

export default function Home() {
  useEffect(() => {
    initMap();
  }, [])
  
  return (
    <div style={{ position: 'relative' }}>
      Home
      <div id="cp-map" style={{ width:"100%", height:"100vh" }}></div>
    </div>
  )
}


