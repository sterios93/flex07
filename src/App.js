import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import firebase from 'firebase'
import { connect } from 'react-redux'
import { withRouter } from 'react-router' // adds match, location and history to component's props
// Action thunks
import { loadArticlesThunk, fetchAllCategoriesThunk, actionLoginSuccess, actionLogout } from './components/reducers/actionCreators'
// Components
import SocialTopNav from './components/common/socialTopNav/SocialTopNav'
import HomePage from './components/homePage/HomePage'
import Footer from './components/common/footer/Footer'
import TheGymPage from './components/theGym/TheGymPage'
import TheTrainerPage from './components/theTrainer/TheTrainerPage'
// import WherePage from './components/whereAreWe/WhereArePage'
// import PricesPage from './components/prices/PricesPage'
import HealthyPage from './components/healthyTips/HealthyTipsPage'
import Login from './components/login/LoginPage'
import CreatePage from './components/createArticle/CreatePage'
import Error from './components/errorPage/Error'
import Article from './components/common/articlePage/Article'
import Team from './components/team/teamPage'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userLoged: false
    }
  }
  componentWillMount () {
    this.props.fetchAllArticles()
    this.props.fetchAllCategories()
  }
  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({userLoged: true})
        this.props.actionLoginSucc()
      } else {
        this.props.actionLogout()
      }
    })
  }
  render () {
    return (
      <div className='App d-flex flex-column'>
        <SocialTopNav />
        <main >
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/home' component={HomePage} />
            <Route path='/gym' component={TheGymPage} />
            <Route path='/trainer' component={TheTrainerPage} />
            <Route exact path='/healthy' component={HealthyPage} />
            <Route exact path='/healthy/:category' component={HealthyPage} />
            <Route path='/healthy/:category/:page' component={HealthyPage} />
            <Route path='/login' component={Login} />
            <Route path='/team' component={Team} />
            {this.state.userLoged ? (<Route path='/create' component={CreatePage} />) : (null)}
            <Route path='/article/:category/:id' component={Article} />
            <Route component={Error} />
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    logedInfo: state.login,
    articles: state.allArticles
  }
}
function mapDispatchToProps (dispatch) {
  return {
    fetchAllArticles: () => dispatch(loadArticlesThunk()),
    fetchAllCategories: () => dispatch(fetchAllCategoriesThunk()),
    actionLoginSucc: () => dispatch(actionLoginSuccess()),
    actionLogout: () => dispatch(actionLogout())
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
