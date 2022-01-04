import React, { useEffect } from 'react'

const { naver } = window;

export default function Home() {
  useEffect(() => {
    const container = document.getElementById("cp-map")
    const mapOptions = {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 10
    };
    const map = new naver.maps.Map(container, mapOptions);
  }, [])
  
  return (
    <div style={{ position: 'relative' }}>
      Home
      <div id="cp-map" style={{ width:"100%", height:"100vh" }}></div>
    </div>
  )
}


