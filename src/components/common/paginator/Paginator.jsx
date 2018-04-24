import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Paginator extends Component {
  render () {
    let currentCategory = this.props.currCat // take the category from the path
    let currentPage = Number(this.props.currPage) || 1
    let startPage = Number(currentPage) - 2 // to make Current page in the middle
    let endPage = Number(currentPage) + 2 // to make Current page in the middle

    let articlesCount = 0
    let allArticles = this.props.allArticles

    for (let article in allArticles) { // find total numbers of articles
      if (allArticles[article].category === currentCategory) {
        articlesCount++
      } else if (currentCategory === 'All') {
        articlesCount++
      }
    }

    let numberOfPages = Math.ceil(articlesCount / this.props.itemsToDisplay)

    let pagesToShow = [] // push all Links into one array and show it
    for (let i = 1; i < numberOfPages + 1; i++) { // numberOfPages
      pagesToShow.push(
        <li
          key={i}
          className='page-item'>
          <Link to={`/healthy/${currentCategory}/${i}`} className='page-link' >{i}</Link>
        </li>)
    }
    // Logic for centering the current page
    let resultPages = []
    if (currentPage === 1 || currentPage < 3) {
      resultPages = pagesToShow.slice(0, 5)
    } else if (currentPage > 2) {
      resultPages = pagesToShow.slice(startPage - 1, endPage)
    }
    return (
      <nav aria-label='Page navigation example'>
        <ul className='pagination justify-content-center'>
          <li className='page-item'>
            <Link to={`/healthy/1`} className='page-link'>Start</Link>
          </li>
          {resultPages}
          <li className='page-item'>
            <Link to={`/healthy/${pagesToShow.length}`} className='page-link'>End</Link>
          </li>
        </ul>
      </nav>
    )
  }
}
function mapStateToProps (state) {
  return {
    allArticles: state.allArticles.articles
  }
}
export default connect(mapStateToProps)(Paginator)
