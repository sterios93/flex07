import React from 'react'
import MainNav from './../common/mainNav/MainNav'
import cardImage from '../../images/card-design.jpg'

let PricesPage = (props) => {
  const photoStyles = {
    width: '100%',
    height: '200px',
    backgroundImage: 'url(' + cardImage + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return (
    <section>
      <div className='wrapper'>
        <MainNav linkColor={'text-dark'} />
      </div>
      <section className='wrapper'>
        <div className='heading d-flex justify-content-center mt-3'>
          <h3 className='link-colors-trainer'>Prices</h3>
        </div>
        <div className='prices row mt-3'>
          <div className='col-4'>
            <h3 className='text-center'>Single Training</h3>
            <div className='photo' style={photoStyles} />
            <div className='description mt-3'>
              <p> <b>Training:</b> Every training costs 5$</p>
              <p> <b>Supplements:</b> You can recharge at our protein bar</p>
              <p> <b>Trainer:</b> Included in every training</p>
            </div>
          </div>
          <div className='col-4'>
            <h3 className='text-center'>Monthly</h3>
            <div className='photo' style={photoStyles} />
            <div className='description mt-3'>
              <p> <b>Training:</b> Every training costs 5$</p>
              <p> <b>Supplements:</b> You can recharge at our protein bar</p>
              <p> <b>Trainer:</b> Included in every training</p>
            </div>
          </div>
          <div className='col-4'>
            <h3 className='text-center'>Monthly unlimited</h3>
            <div className='photo' style={photoStyles} />
            <div className='description mt-3'>
              <p> <b>Training:</b> Every training costs 5$</p>
              <p> <b>Supplements:</b> You can recharge at our protein bar</p>
              <p> <b>Trainer:</b> Included in every training</p>
            </div>
          </div>
        </div>

      </section>
    </section>
  )
}

export default PricesPage
