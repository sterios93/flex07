import { createStore, combineReducers, applyMiddleware } from 'redux'
import { loginReducer, fetchAllArticlesReducer, fetchAllCategoriesReducer } from './reducers'
import thunk from 'redux-thunk'

let store = createStore(combineReducers({
  login: loginReducer,
  allArticles: fetchAllArticlesReducer,
  allCategories: fetchAllCategoriesReducer
}), applyMiddleware(thunk))

export default store
