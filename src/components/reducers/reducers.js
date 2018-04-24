import { LOGIN_SUCESS,
         LOGIN_ERROR,
         LOGOUT,
         LOGIN_REDIRECT_CLEAR,
         LOAD_ARTICLES_SUCCESS,
         LOAD_ARTICLES_ERROR,
         FETCH_CATEGORIES_SUCCESS,
         FETCH_CATEGORIES_ERROR } from './actionCreators'

// Login reducer
export function loginReducer (state = {logedIn: false, redirect: false, errorMsg: ''}, action) {
  switch (action.type) {
    case LOGIN_SUCESS:
      return Object.assign({}, state, {
        logedIn: true,
        errorMsg: ''
      })
    case LOGIN_ERROR:
      return Object.assign({}, state, {
        logedIn: false,
        redirect: false,
        errorMsg: action.error
      })
    case LOGOUT:
      return Object.assign({}, state, {
        logedIn: false,
        errMsg: ''
      })
    case LOGIN_REDIRECT_CLEAR:
      return Object.assign({}, state, {
        logedIn: true,
        redirect: false,
        errorMsg: ''
      })
    default:
      return state
  }
}

// Fetch all articles reducer

export function fetchAllArticlesReducer (state = {articles: [], error: ''}, action) {
  switch (action.type) {
    case LOAD_ARTICLES_SUCCESS:
      return Object.assign({}, state, {
        articles: action.articles,
        error: ''
      })
    case LOAD_ARTICLES_ERROR:
      return Object.assign({}, state, {
        articles: [],
        error: action.error
      })
    default:
      return state
  }
}

// Fetch all categories reducer

export function fetchAllCategoriesReducer (state = {categories: [], errMsg: ''}, action) {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return Object.assign({}, state, {
        categories: action.categories
      })
    case FETCH_CATEGORIES_ERROR:
      return Object.assign({}, state, {
        categories: [],
        errMsg: action.error
      })
    default:
      return state
  }
}
