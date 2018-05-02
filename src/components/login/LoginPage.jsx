import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginThunk, actionLogiReset } from './../reducers/actionCreators'
import { withRouter } from 'react-router'
import firebase from 'firebase'

class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      validPassword: false,
      error: false,
      errorMsg: '',
      redirect: false
    }
    // Bind
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange (e) {
    this.setState({[e.target.name]: e.target.value})
  }
  onSubmit (e) {
    e.preventDefault()
    let email = this.state.email
    let password = this.state.password
      this.props.loginThunkfunc(email, password)
  }

  componentWillReceiveProps (nextProps) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.history.push('/')
      }
    })
  }

  render () {
    let errorMessage = this.props.loginInfo.errorMsg
    return (
      <div className='container login-page'>
        <div className='row d-flex justify-content-center'>
          <form onSubmit={this.onSubmit} className='col-12 col-sm-6 text-center mt-5'>
            { this.state.error ? <p> {this.state.errorMsg} </p> : null }
            <div className='form-group'>
              <label htmlFor='email'>Email address</label>
              <input
                onChange={this.onChange}
                type='email'
                className='form-control'
                id='email'
                aria-describedby='emailHelp'
                placeholder='Enter email'
                name='email'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                onChange={this.onChange}
                type='password'
                className='form-control'
                id='password'
                placeholder='Password'
                name='password'
              />
              {errorMessage && <p className='text-danger'>{errorMessage}</p>}
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    loginInfo: state.login
  }
}
function mapDispatchToProps (dispatch) {
  return {
    loginThunkfunc: (email, password) => dispatch(loginThunk(email, password)),
    loginResetAction: () => dispatch(actionLogiReset())
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
