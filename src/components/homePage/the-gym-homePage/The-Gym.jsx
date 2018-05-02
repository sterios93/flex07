import React from 'react'

import Carousel from './../../common/carousel/Carousel'

let TheGym = (props) => {
  return (
    <section className='the-gym'>
      <div className='wrapper'>
        <div className='row mt-3 mw-100 m-0 d-lg-flex flex-md-column'>
          <Carousel col={props.carouselCol} order={'order-2 order-md-1'}/>
          <div className={`${props.textCol} d-flex align-items-center flex-column justify-content-center`}>
            <h3 className='mt-3'>The Gym </h3>
            <p className='text-center mb-5'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheGym
