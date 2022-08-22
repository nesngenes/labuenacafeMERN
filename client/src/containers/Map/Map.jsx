import React from 'react'
import "mapbox-gl/dist/mapbox-gl.css";
import MapGL, {
  Marker,
  NavigationControl,
  Popup,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import { useState } from "react";
import getCenter from 'geolib/es/getCenter';

const Map = ({cafes}) => {
  
  const coordinates = cafes.map(cafe => ({
    longitude: cafe.long,
    latitude: cafe.lat
  }))

  const center = getCenter(coordinates)

  const [viewState, setViewState] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 10
  })


  return (
    <>
      <MapGL
        style={{
          width: "100vw",
          height: "600px",
        }}

        onMove={(evt) => setViewState(evt.viewState)}
         mapboxAccessToken='pk.eyJ1Ijoicm9zZXF1aW56bGV5IiwiYSI6ImNra3cyNjQ2MDRxY2Qyb253cGdlMWd4enMifQ.l0y3X-soZ2rqvCDazUNHWw'
         mapStyle='mapbox://styles/rosequinzley/cl6vx6ryq000514rtgniq15tp'
         {...viewState}
      >

        {cafes.map(cafe => (
        <div key={cafe.long}>
            <Marker
                longitude={cafe.long}
                latitude={cafe.lat}
            >
            </Marker>
        </div>
        ))}

        <NavigationControl position="bottom-right" />
        <FullscreenControl />

        <GeolocateControl />
      </MapGL>
    </>
  );
}

export default Map;