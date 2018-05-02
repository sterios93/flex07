import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { actionLogout } from './../../reducers/actionCreators'

class MainNav extends Component {
  constructor(props) {
    super(props)
    // bind
    this.onLogout = this.onLogout.bind(this)
  }
  onLogout(e) {
    e.preventDefault()
    window.localStorage.clear()
    this.props.actionLogout()
    this.props.history.push('/home')
  }

  render() {
    let userLoged = this.props.logedIn
    let linkColor = this.props.linkColor
    let isHome = this.props.isHome
    return (
      <nav className={`navbar navbar-expand-lg ${isHome ? 'navbar-dark' : 'navbar-light'} bg-transperent`}>
        <Link className={`navbar-brand font-weight-bold ${linkColor} logo`} to='/'>FLEX 07</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" style={{borderColor: 'white'}}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto text-center">
            <li className='nav-item active'>
              <Link className={`nav-link ${linkColor} font-weight-bold`} to='/gym'>The Gym<span className='sr-only'>(current)</span></Link>
            </li>
            <li className='nav-item'>
              <Link className={`nav-link ${linkColor} font-weight-bold`} to='/trainer'>The trainer</Link>
            </li>
            <li className='nav-item'>
              <Link className={`nav-link ${linkColor} font-weight-bold`} to='/team'>Team FLEX 07</Link>
            </li>
            <li className='nav-item'>
              <Link className={`nav-link ${linkColor} font-weight-bold`} to='/healthy/All'>Fitness and Nutrition</Link>
            </li>
            {userLoged
              ? <li className='nav-item'>
                <Link className={`nav-link ${linkColor} font-weight-bold`} to='/create'>Create Article</Link>
              </li>
              : null}
            {userLoged
              ? <li className='nav-item'>
                <button onClick={this.onLogout} className={`nav-link ${linkColor} font-weight-bold btn-primary btn my-0 mx-auto`}>Logout</button>
              </li>
              : null}
          </ul>
        </div>
      </nav>
    )
  }
}
function mapStateToProps(state) {
  return {
    logedIn: state.login.logedIn
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actionLogout: () => dispatch(actionLogout())
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainNav))
