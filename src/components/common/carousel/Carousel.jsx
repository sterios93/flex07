import React from 'react'

let Carousel = (props) => {
  let col = props.col
  let order = props.order
  let height = props.height
  let pic1 = 'https://firebasestorage.googleapis.com/v0/b/flex07-kinski.appspot.com/o/carousel-home%2Freceived_1647131752246581.jpeg?alt=media&token=f9e812ea-9083-440f-bb0a-28bb209be23d'
  let pic2 = 'https://firebasestorage.googleapis.com/v0/b/flex07-kinski.appspot.com/o/carousel-home%2F_20161128_192745.jpg?alt=media&token=8d9c8956-e46f-4a52-8ec7-f99d33f3fa85'
  let pic3 = 'https://firebasestorage.googleapis.com/v0/b/flex07-kinski.appspot.com/o/carousel-home%2F_20161124_173722.jpg?alt=media&token=2dac11c9-174d-4c70-9b8d-d0e25b11d60b'
  let pic4 = 'https://firebasestorage.googleapis.com/v0/b/flex07-kinski.appspot.com/o/carousel-home%2F3.jpg?alt=media&token=ccc83292-193b-47a2-8399-26f8c9cc2955'

  const photoStyles = {
    width: '100%',
    height: '400px',
    backgroundImage: 'url(' + pic1 + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  const photoStyles2 = {
    width: '100%',
    height: '400px',
    backgroundImage: 'url(' + pic2 + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }  
  const photoStyles3 = {
    width: '100%',
    height: '400px',
    backgroundImage: 'url(' + pic3 + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  const photoStyles4 = {
    width: '100%',
    height: '400px',
    backgroundImage: 'url(' + pic4 + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return (
    <div className={`${col} ${order} p-0`}>
      <div id='carouselExampleControls' className='carousel slide' data-interval='false' data-ride='carousel'>
        <div className={`carousel-inner ${height}`}>
          <div className='carousel-item active' style={photoStyles}>
            {/* <img className='d-block w-100' src={require('./../../../images/carousel1.jpg')} /> */}
          </div>
          <div className='carousel-item ' style={photoStyles2}>
            {/* <img className='d-block w-100' src='https://firebasestorage.googleapis.com/v0/b/flex07-kinski.appspot.com/o/2.jpg?alt=media&token=dee22d3a-9cf3-428f-b4d7-d2a5dd2c4935' alt='Second slide' /> */}
          </div>
          <div className='carousel-item' style={photoStyles3}>
            {/* <img className='d-block w-100' src='https://firebasestorage.googleapis.com/v0/b/flex07-kinski.appspot.com/o/2.jpg?alt=media&token=dee22d3a-9cf3-428f-b4d7-d2a5dd2c4935' alt='Third slide' /> */}
          </div>
          <div className='carousel-item' style={photoStyles4}>
            {/* <img className='d-block w-100' src='https://firebasestorage.googleapis.com/v0/b/flex07-kinski.appspot.com/o/2.jpg?alt=media&token=dee22d3a-9cf3-428f-b4d7-d2a5dd2c4935' alt='Third slide' /> */}
          </div>
        </div>
        <a className='carousel-control-prev text-dark' href='#carouselExampleControls' role='button' data-slide='prev'>
          <i className='fa fa-chevron-left' />
          <span className='sr-only'>Previous</span>
        </a>
        <a className='carousel-control-next text-dark' href='#carouselExampleControls' role='button' data-slide='next'>
          <i className='fa fa-chevron-right' />
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </div>
  )
}
export default Carousel
