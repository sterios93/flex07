import React from 'react'
import MainNav from './../common/mainNav/MainNav'

let TheTrainerPage = (props) => {
  return (
    <section>
      <div className='wrapper'>
        <MainNav linkColor={'text-dark'} />
      </div>
      <div className='heading d-flex justify-content-center mt-2 mb-2'>
        <h3 className='link-colors-trainer'>THE TRAINER</h3>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-6 d-flex justify-content-center bg-trainer'>
            {/* <img src={require('./../../images/kinski-2.jpg')} /> */}
          </div>
          <div className='col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-6  flex-column justify-content-center bg-trainer-descr'>
            <h3 className='mb-3 text-center mt-sm-3'>Lorem Ipsum</h3>
            <p>
              <span>
                <img className='w-25 rounded float-right mr-2' src={require('./../../images/kinski-edit.jpg')} alt='breeze' />
              </span>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheTrainerPage
