import React, { Component } from 'react'
import Card from './Card'
import { connect } from 'react-redux'

class Healthy extends Component {
  render () {
    let cardCol = this.props.col
    let title = this.props.title

    let currentCategory = this.props.currCat // take the category from the path
    let currentPage = this.props.currPage || 1
    let itemsPerPage = this.props.itemsToDisplay

    // make the hole array with articles
    let displayArr = []
    let articlesForArticlePage = []
    let allArticles = this.props.articles
    for (let article in allArticles) {
      let id = article
      if (currentCategory === allArticles[article].category) {
        displayArr.push(<Card article={allArticles[article]} key={id} articleId={id} col={cardCol} />)
        articlesForArticlePage.push(<Card article={allArticles[article]} key={id} articleId={id} col={cardCol} />)
      } else if (currentCategory === 'All') {
          if(allArticles[article].category !== 'Team') { // dont display Team articles
            displayArr.push(<Card article={allArticles[article]} key={id} articleId={id} col={cardCol} />)
          }
      } else if (currentCategory === undefined) {
        displayArr.push(<Card article={allArticles[article]} key={id} articleId={id} col={cardCol} />)
      }
    }

    // if its healtyTips page show this
    let isHealthyPage = this.props.isHealthy
    let currentStart = ((currentPage * itemsPerPage)) - itemsPerPage
    let currentEnd = currentStart + itemsPerPage
    let itemsToDisplayHealthyPage = displayArr.slice(currentStart, currentEnd)

    // if its article page show this
    // let isArticle = this.props.isArticle
    // let randomStartArticlePage = Math.floor(Math.random() * Math.floor(displayArr.length - itemsPerPage))
    // let itemsToDisplayArticlePage = articlesForArticlePage.slice(randomStartArticlePage, randomStartArticlePage + itemsPerPage)
    // if its home page show this -> ItemsToDisplay
    let isHome = this.props.isHome
    // console.log('is article : ', isArticle)
    let randomStart = Math.floor(Math.random() * Math.floor(displayArr.length - itemsPerPage))
    let itemsToDisplayHome = displayArr.slice(randomStart, randomStart + itemsPerPage) // select a few to show
    return (
      <section className='healthy mb-5'>
        <div className='heading d-flex justify-content-center mt-3'>
          <h2 className='link-colors-trainer'>{title}</h2>
        </div>
        <div className='row mt-5'>
          {isHome && itemsToDisplayHome}
          {/* {isArticle && itemsToDisplayArticlePage } */}
          {isHealthyPage && itemsToDisplayHealthyPage}
        </div>
      </section>
    )
  }
}
function mapStateToProps (state) {
  return {
    articles: state.allArticles.articles
  }
}
export default connect(mapStateToProps)(Healthy)