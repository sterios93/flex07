import React, { Component } from 'react'

// Components
import MainIntro from './main-intro/Main-intro'
import TheGym from './the-gym-homePage/The-Gym'
import Where from './where/Where'
import Healthy from './healthy/Healthy'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      home: true
    }
  }
  render() {
    return (
      <section>
        {/* Modal Boilerplate */}
        <div className='modal fade' id='exampleModalCenter' tabIndex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'>
          <div className='modal-dialog modal-dialog-centered' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h4 className='modal-title' id='exampleModalLongTitle'>Take your free training code</h4>
                <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body text-center'>
                <h5>This is your free training code:</h5>
                <p className='font-weight-bold text-center'>FLEX07TRAINING8877122</p>
                <p className='text-center'> Show it when you enter the gym !</p>
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-secondary' data-dismiss='modal'>Close</button>
              </div>
            </div>
          </div>
        </div>
        <MainIntro isHome={this.state.home} />
        <TheGym carouselCol={'col-12'} textCol={'col-12'} />
        <Where mapCol={'col-12 col-md-6'} textCol={'col-12 col-md-6'} />
        <div className='wrapper'>
          <Healthy itemsToDisplay={3} isHome={this.state.home} col={'col-12 col-xl-4 col-lg-4 col-md-6 col-sm-6'} title={'HEALTHY TIPS'} />
        </div>
        <div className='d-flex justify-content-center align-items-center p-5 mb-5' style={{background: '#06719f'}}>
          <button type='button' className='btn btn-light' data-toggle='modal' data-target='#exampleModalCenter'>
            Get your free training
        </button>
        </div>
      </section>
    )
  }
}

export default HomePage
