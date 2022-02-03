import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import initMap from 'utils/initMap';
import initMaps from 'utils/initMaps'
import 'containers/containers.scss'

export default function MapContainer() {
  const place = useSelector(state => state.places.place)
  useEffect(() => {
      initMaps(place[0]) 
  }, [place])

  return <div id="cp-map" style={{ width:"100%", height:"100vh" }}></div>
}