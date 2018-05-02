import React from 'react'
import MyMapComponent from './googleMap'

let Where = (props) => {
  return (
    <section className='where pt-3 mt-5 text-white pb-5 mb-5'>
      <div className='wrapper'>
        <div className='row mt-3'>
          <div className={`${props.textCol} d-flex align-items-center flex-column justify-content-center`}>
            <h3>Address</h3>
            <p className='text-center '>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <MyMapComponent
            isMarkerShown
            googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyBaVUuYvT8c50EC66MIL0z9VOZb0JaDSfw&callback=initMap'
            loadingElement={<div id='map' className={props.mapCol} style={{ height: `100%` }} />}
            containerElement={<div id='mapContainer' className={props.mapCol} style={{ minHeight: `300px` }} />}
            mapElement={<div id='map' style={{ height: `100%` }} />}
          />
        </div>
      </div>
    </section>
  )
}

export default Where
