import React, { Component } from 'react'
import MainNav from './../mainNav/MainNav'
import { connect } from 'react-redux'
import Card from './../../homePage/healthy/Card'
import './article.css'

class Article extends Component {
  constructor (props) {
    super(props)

    this.state = {
      articleId: this.props.match.params.id,
      allArticles: this.props.appData.allArticles.articles,
      article: true
    }
  }
  componentWillReceiveProps (nextProps) {
    this.setState({
      articleId: nextProps.match.params.id,
      allArticles: nextProps.appData.allArticles.articles
    })
  }
  render () {
    window.scrollTo(0, 0)
    let currentCat = this.props.match.params.category
    // let articleId = this.props.match.params.id
    // let allArticles = this.props.appData.allArticles.articles
    let allArticles = this.state.allArticles
    let articleToDisplay = {}
    for (let article in allArticles) {
      if (article === this.state.articleId) {
        articleToDisplay = allArticles[article]
      }
    }
    const { title, description, category, imageDownloadUrl, video } = articleToDisplay

    // css
    const photoStyles = {
      // width: '100%',
      height: '300px',
      backgroundImage: 'url(' + imageDownloadUrl + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
    // For related ARticles
    let displayArr = []
    let itemsPerPage = 3
    for (let article in allArticles) {
      let id = article
      if (currentCat === allArticles[article].category) {
        if (this.state.articleId !== id) {
          displayArr.push(<Card article={allArticles[article]} key={id} articleId={id} col={'col-12 col-xl-4 col-lg-4 col-md-4 col-sm-4'} />)
        }
      }
    }
    let randomStart = Math.floor((Math.random() * Math.floor(displayArr.length)) + 1)
    // if the length left is not enough for displaying itemsPerPage
    if (randomStart > displayArr.length - itemsPerPage) {
      randomStart = displayArr.length - itemsPerPage
    }

    let itemsToDisplayArticlePage = displayArr.slice(randomStart, randomStart + itemsPerPage)
    return (
      <section className='h-100'>
        <div className='wrapper'>
          <MainNav linkColor={'text-dark'} />
          <div className='row d-flex flex-row justify-content-center article'>
            <div className='col-12 col-sm-10 p-0'>
              <div className='description'>
                <h1 className='text-center mb-3 link-colors-trainer'>{title}</h1>
                <div>
                  <p className=' w-100 text-center text-center text-sm-left'>
                    <span className='mobilePhoto float-right ml-sm-1 mb-1' style={photoStyles} />
                    <span className='d-inline-block d-sm-inline lineHeight p-3 p-sm-0'>{description}</span>
                    </p>
                </div>

                {video && <div className='mt-3 col p-0'>
                  <h4 className='mb-2 text-center text-sm-left'>Video section</h4> 
                  <iframe width='100%' height='315' className='mw-100' title='video'
                    src={`${video}`}
                    frameBorder='0'
                    allow='autoplay; encrypted-media' allowFullScreen />
                </div>}
                <p><span className='link-colors-trainer'>Category: </span>{category}</p>
              </div>
            </div>
          </div>
          <div className='wrapper'>
            <section className='healthy mb-5'>
              <div className='heading d-flex justify-content-center mt-3'>
                <h2 className='link-colors-trainer'>Related</h2>
              </div>
              <div className='row mt-5'>
                {itemsToDisplayArticlePage}
              </div>
            </section>
          </div>
        </div>
      </section>
    )
  }
}
function mapStateToProps (state) {
  return {
    appData: state
  }
}
export default connect(mapStateToProps)(Article)
