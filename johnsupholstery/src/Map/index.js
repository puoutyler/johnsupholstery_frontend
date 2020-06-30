import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 21.417282,
  lng: -157.803794
};

class Map extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey='AIzaSyBmDTRaPtpeEP2CwKr5zyY0Z6uIWE72ho0'
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}
        >
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default Map;
