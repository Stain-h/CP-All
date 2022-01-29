import React, { useEffect } from 'react';
import initMap from 'utils/initMap';

export default function MapContainer({ data }) {
  useEffect(() => {
    initMap(data)
  }, [])

  return <div id="cp-map" style={{ width:"100%", height:"100vh" }}></div>
}