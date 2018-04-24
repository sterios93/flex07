import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={18}
    defaultCenter={{ lat: 42.696890, lng: 23.318231 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 42.696890, lng: 23.318231 }} />}
  </GoogleMap>
))

export default MyMapComponent
