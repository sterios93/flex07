import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { actionLogout } from './../../reducers/actionCreators'

class MainNav extends Component {
  constructor (props) {
    super(props)
    // bind
    this.onLogout = this.onLogout.bind(this)
  }
  onLogout (e) {
    e.preventDefault()
    window.localStorage.clear()
    this.props.actionLogout()
    this.props.history.push('/home')
  }

  render () {
    let userLoged = this.props.logedIn
    let linkColor = this.props.linkColor
    let menuColorMobSize = this.props.buttonMenuColorMobileSize
    return (
      <nav className='navbar justify-content-between main-navigation'>
        <Link className={`navbar-brand font-weight-bold ${linkColor} logo`} to='/'>FLEX 07</Link>
        <nav className='navbar navbar-expand-lg'>
          <button className={`navbar-toggler ${menuColorMobSize}`} type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span><i className='fa fa-align-justify' /> Menu</span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item active'>
                <Link className={`nav-link ${linkColor} font-weight-bold`} to='/gym'>The Gym<span className='sr-only'>(current)</span></Link>
              </li>
              <li className='nav-item'>
                <Link className={`nav-link ${linkColor} font-weight-bold`} to='/trainer'>The trainer</Link>
              </li>
              {/* <li className='nav-item'>
                <Link className={`nav-link ${linkColor} font-weight-bold`} to='/where'>Where are we?</Link>
              </li> */}
              <li className='nav-item'>
                <Link className={`nav-link ${linkColor} font-weight-bold`} to='/team'>Team FLEX 07</Link>
              </li>
              {/* <li className='nav-item'>
                <Link className={`nav-link ${linkColor} font-weight-bold`} to='/prices'>Prices</Link>
              </li> */}
              <li className='nav-item'>
                <Link className={`nav-link ${linkColor} font-weight-bold`} to='/healthy/All'>Fitness and Nutrition</Link>
              </li>
              {userLoged
                    ? <li className='nav-item'>
                      <Link className={`nav-link ${linkColor} font-weight-bold`} to='/create'>Create Article</Link>
                    </li>
                    : null }
              {userLoged
                ? <li className='nav-item'>
                  <button onClick={this.onLogout}className={`nav-link ${linkColor} font-weight-bold btn-primary btn`}>Logout</button>
                </li>
                : null}

            </ul>
          </div>
        </nav>
      </nav>
    )
  }
}
function mapStateToProps (state) {
  return {
    logedIn: state.login.logedIn
  }
}
function mapDispatchToProps (dispatch) {
  return {
    actionLogout: () => dispatch(actionLogout())
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainNav))
