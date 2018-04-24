import React, { Component } from 'react'
import MainNav from './../common/mainNav/MainNav'
import Healthy from './../homePage/healthy/Healthy'
import Paginator from './../common/paginator/Paginator'
import Aside from './aside'

class HealthyTipsPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentPage: this.props.match.params.page,
      currentCategory: this.props.match.params.category,
      isHealthy: true
    }
  }
  componentWillReceiveProps (nextProps) {
    this.setState({currentPage: nextProps.match.params.page})
    this.setState({currentCategory: nextProps.match.params.category})
    window.scrollTo(0, 0)
  }
  render () {
    return (
      <section>
        <div className='wrapper'>
          <MainNav linkColor={'text-dark'} />
          <section className='row'>
            <div className='aside col-12 col-xl-3 col-lg-3 col-md-3 col-sm-3 mt-3'>
              <Aside />
            </div>
            <div className='col-12 col-xl-9 col-lg-9 col-md-9 col-sm-9 mt-9 p-0'>
              <Healthy
                itemsToDisplay={6}
                currPage={this.state.currentPage}
                currCat={this.state.currentCategory}
                title={'HEALTHY TIPS'}
                col={'col-12 col-xl-4 col-lg-4 col-md-6 col-sm-6'}
                isHealthy={this.state.isHealthy}
              />
              <Paginator itemsToDisplay={6} currPage={this.state.currentPage} currCat={this.state.currentCategory} />
            </div>
          </section>
        </div>
      </section>
    )
  }
}

export default HealthyTipsPage
