import React, { Component } from 'react'
import MainNav from './../common/mainNav/MainNav'
// import Healthy from './../homePage/healthy/Healthy'
import Card from './../homePage/healthy/Card'
import { connect } from 'react-redux'

const photoStyles = {
  width: '100%',
  height: '250px',
  backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/flex07-kinski.appspot.com/o/carousel-home%2Freceived_1647131752246581.jpeg?alt=media&token=f9e812ea-9083-440f-bb0a-28bb209be23d)',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}

class Team extends Component {
  render() {
    let articles = this.props.articles
    let teamArticles = []
    for(let article in articles) {
      let articleItem = articles[article]
      let category = articleItem.category
      let id = article
      if(category === 'Team') {
        teamArticles.push(<Card 
                          article={articleItem}
                          key={id}
                          articleId={id}
                          col={'col-12 col-xl-4 col-lg-4 col-md-6 col-sm-6'}
                          />) 
      }
    }
    return (
      <section className='wrapper'>
        <MainNav linkColor={'text-dark'} />
        <section>
          <h3 className='text-center'>LA FAMILIA</h3>
          <div className='photo-family' style={photoStyles}>
          </div>
          <div className='wrapper mt-4'>
            <h1 className='text-center mb-3'>MEET THE SPARTANS</h1>
            <div className='d-flex flex-wrap'>
             {teamArticles}
            </div>
          </div>
        </section>
      </section>
    )
  }
}
function mapStateToProps(state) {
  return {
    articles: state.allArticles.articles
  }
}
export default connect(mapStateToProps)(Team)
