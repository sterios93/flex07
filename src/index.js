import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap'
// Css
import './css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/toastr/build/toastr.min.css'
import './css/site.css'
// redux
import { Provider } from 'react-redux'
import store from './components/reducers/store'

// firebase
import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyBaVUuYvT8c50EC66MIL0z9VOZb0JaDSfw',
  authDomain: 'flex07-kinski.firebaseapp.com',
  databaseURL: 'https://flex07-kinski.firebaseio.com',
  projectId: 'flex07-kinski',
  storageBucket: 'flex07-kinski.appspot.com',
  messagingSenderId: '1032019167833'
}
firebase.initializeApp(config)


ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))
registerServiceWorker()
