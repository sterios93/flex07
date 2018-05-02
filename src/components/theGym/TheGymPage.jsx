import React from 'react'
import MainNav from './../common/mainNav/MainNav'
import Carousel from './../common/carousel/Carousel'
import './gym.css'
let image = 'https://images3.alphacoders.com/786/786607.jpg'

let TheGymPage = (props) => {
  return (
    <section>
      <div className='wrapper'>
        <MainNav linkColor={'text-dark'} />
        <div className='heading d-flex justify-content-center mt-2 mb-2'>
          <h3>THE GYM</h3>
        </div>
      </div>
      <section className='row-fluid w-100 mb-2'>
        <Carousel col={'col'} height={'carousel-height'} image={image} />
      </section>
      <div className='wrapper d-flex justify-content-center text-center mb-5'>
        <div className='col-12  flex-column justify-content-center'>
          <h3 className='mb-3'>FLEX 07 - Фитнесът </h3>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </section>
  )
}

export default TheGymPage
