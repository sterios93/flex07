import React from 'react'
import MyMapComponent from './googleMap'

let Where = (props) => {
  return (
    <section className='where pt-3 mt-5 text-white pb-5 mb-5'>
      <div className='wrapper'>
        <div className='heading d-flex justify-content-center mt-3'>
          {/* <h3>КЪДЕ СЕ НАМИРАМЕ ?</h3> */}
        </div>
        <div className='row mt-3'>
          <div className={`${props.textCol} d-flex align-items-center flex-column justify-content-center`}>
            <h3>Адрес ?</h3>
            <p className='text-center text-sm-left'>
              {/* Фитнесът се намира на <span className='font-weight-bold'>бул.Александър Стамболийски номер 29</span>, в безистена след Subway, има табели с помощта
              на които лесно да се ориентирате.Фитнесът се намира на много комуникативно място, в идеалният център на София,
              до него може да стигнете със няколко вида транспорт като метро, трамвай и др.
              В случай, че не успеете да ни намерите, не се колебайте да позвъните на предоставеният телефон:
              08881118881, с удоволствие ще ви упътим и посрещнем. */}
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <MyMapComponent
            isMarkerShown
            googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyBaVUuYvT8c50EC66MIL0z9VOZb0JaDSfw&callback=initMap'
            loadingElement={<div id='map' className={props.mapCol}style={{ height: `100%` }} />}
            containerElement={<div id='map'className={props.mapCol} style={{ height: `300px` }} />}
            mapElement={<div id='map'style={{ height: `100%` }} />}
            />
        </div>
      </div>
    </section>
  )
}

export default Where
