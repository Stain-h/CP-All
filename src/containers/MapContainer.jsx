import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import initMap from 'utils/initMap';

export default function MapContainer() {
  const place = useSelector(state => state.places.place)
  useEffect(() => {
    initMap(place)
  }, [place])

  return <div id="cp-map" style={{ width:"100%", height:"100vh" }}></div>
}