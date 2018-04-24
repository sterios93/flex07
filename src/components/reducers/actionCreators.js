import firebase from 'firebase'

// Action types LOGIN

export const LOGIN_SUCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_REDIRECT_CLEAR = 'LOGIN_RESET'
export const LOGOUT = 'LOGOUT'

// Action creators LOGIN

export function actionLoginSuccess () {
  return {
    type: LOGIN_SUCESS
  }
}
export function actionLogout () {
  return {
    type: LOGOUT
  }
}
function actionLoginError (error) {
  return {
    type: LOGIN_ERROR,
    error
  }
}
export function actionLogiReset () {
  return {
    type: LOGIN_REDIRECT_CLEAR
  }
}

export function loginThunk (email, password) {
  return async (dispatch) => {
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(err => dispatch(actionLoginError(err.message)))
    // .then(res => dispatch(actionLogin(res)))
  }
}

// Action types fetch all Articles

export const LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLES_SUCCESS'
export const LOAD_ARTICLES_ERROR = 'LOAD_ARTICLES_ERROR'

function actionLoadArticlesSuccess (articles) {
  return {
    type: LOAD_ARTICLES_SUCCESS,
    articles
  }
}
function actionLoadArticlesError (error) {
  return {
    type: LOAD_ARTICLES_SUCCESS,
    error
  }
}

export function loadArticlesThunk () {
  return async (dispatch) => {
    let postsRef = firebase.database().ref('articles/')
    postsRef.on('value', (articles) => { // listen for chagnes and update it
      let allArticles = articles.val()  // take the object with articles
      dispatch(actionLoadArticlesSuccess(allArticles))
    }, (err) => dispatch(actionLoadArticlesError(err)))
  }
}

// Action types fetch all categories

export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS'
export const FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR'

function actionLoadCategoriesSuccess (categories) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    categories
  }
}

function actionLoadCategoriesError (error) {
  return {
    type: FETCH_CATEGORIES_ERROR,
    error
  }
}

export function fetchAllCategoriesThunk () {
  return async (dispatch) => {
    let categoriesRef = firebase.database().ref('/categories/')
    await categoriesRef.on('value', snapshot => {
      let categories = snapshot.val()
      dispatch(actionLoadCategoriesSuccess(categories))
    }, err => dispatch(actionLoadCategoriesError(err)))
  }
}
