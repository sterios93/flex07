import React, { Component } from 'react'

// Components
import MainIntro from './main-intro/Main-intro'
import TheGym from './the-gym-homePage/The-Gym'
import Where from './where/Where'
import Healthy from './healthy/Healthy'
import Jumbotron from './main-intro/Jumbotron'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      home: true
    }
  }
  render () {
    return (
      <section>
        <div className='modal fade' id='exampleModalCenter' tabIndex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'>
          <div className='modal-dialog modal-dialog-centered' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h3 className='modal-title' id='exampleModalLongTitle'>Take your free training code</h3>
                <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                <h5>This is your free training code:</h5>
                <p className='font-weight-bold'>FLEX07TRAINING8877122</p>
                <p>Show it when you enter the gym !</p>
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-secondary' data-dismiss='modal'>Close</button>
              </div>
            </div>
          </div>
        </div>
        <MainIntro />
        <TheGym carouselCol={'col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6'} textCol={'col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6'} />
        <Jumbotron display={'d-block d-sm-none'} />
        <Where mapCol={'col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6'} textCol={'col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6'} />
        <div className='wrapper'>
          <Healthy itemsToDisplay={3} isHome={this.state.home} col={'col-12 col-xl-4 col-lg-4 col-md-6 col-sm-6'} title={'HEALTHY TIPS'} />
        </div>
      </section>
    )
  }
}

export default HomePage
