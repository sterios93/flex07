import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import toastr from 'toastr'
import { connect } from 'react-redux'

class Card extends Component {
  constructor(props) {
    super(props)

    // Bind
    this.onClickDelete = this.onClickDelete.bind(this)
  }
  async onClickDelete(e) {
    e.preventDefault()
    const id = this.props.articleId
    let fileName = this.props.article.fileName
    let imagesRef = firebase.storage().ref().child(`article-images/${fileName}`)
    await imagesRef.delete()
      .then(() => toastr.success('Image deleted'))
      .catch(error => toastr.warning(error))

    let articleRef = firebase.database().ref(`/articles/${id}`)
    await articleRef.remove()
      .then(() => toastr.success('Article deleted'))
      .catch(error => toastr.warning(error))
  }
  render() {
    let col = this.props.col
    let userLoged = this.props.userLoged
    const { category, imageDownloadUrl, title, shortDescription } = this.props.article
    const id = this.props.articleId

    const photoStyles = {
      width: '100%',
      height: '200px',
      backgroundImage: 'url(' + imageDownloadUrl + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
    return (
      <div className={`${col} text-center mb-5 p-0 p-sm-3`} >
        <article className='tip h-100'>
          <div className="card h-100">
            <div className="card-img-top" style={photoStyles} />
            <div className="card-body description p-3" style={{backgroundColor: 'rgba(0,0,0,.03)'}}>
              <p className="card-title short-descr">{title}</p>
              <p className="card-text mb-2 short-descr">{shortDescription}</p>
              <p className="card-subtitle text-muted">Category: {category}</p>
            </div>
            <div className="card-footer border-0">
              <Link to={`/article/${category}/${id}`} className='btn btn-primary'>Read More</Link>
              {userLoged && <button onClick={this.onClickDelete} className='btn btn-danger'>Delete</button>}
            </div>
          </div>
        </article>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    userLoged: state.login.logedIn
  }
}
export default connect(mapStateToProps)(Card)
