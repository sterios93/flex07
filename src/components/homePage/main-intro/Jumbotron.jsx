import React from 'react'

let styles = {
  jumboBg: {
    backgroundColor: 'rgba(19,24,33,0.3)'
  }
}

let Jumbotron = (props) => {
  return (
    <div style={styles.jumboBg}
    className={`jumbotron ${props.display} col-12 col-sm-6 col-lg-4 col-xl-4 mt-3 align-self-center p-1 text-center`}>
      <h1 className='display-4'>Hello !</h1>
      <p className='lead'>Are you ready for a change ?</p>
      <hr className='my-2' />
      <p>Take your free training now, just click the button below.</p>
      <button type='button' className='btn btn-primary mb-4' data-toggle='modal' data-target='#exampleModalCenter'>
        Get your free training
      </button>

    </div>
  )
}

export default Jumbotron
