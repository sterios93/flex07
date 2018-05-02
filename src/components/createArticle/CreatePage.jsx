import React, { Component } from 'react'
import MainNav from './../common/mainNav/MainNav'
import firebase from 'firebase'
import { writeArticleData } from './functions'
import toastr from 'toastr'
import { connect } from 'react-redux'

class CreatePage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      newCategory: '',
      category: '',
      imageName: '',
      video: '',
      imageDownloadUrl: '',
      shortDescription: '',
      description: '',
      file: ''
    }
    // Bind
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onChangePicture = this.onChangePicture.bind(this)
    this.onCategoryAdd = this.onCategoryAdd.bind(this)
  }
  onChange (e) {
    this.setState({[e.target.name]: e.target.value})
  }
  onChangePicture (e) {
    let file = e.target.files[0]
    let fileName = file.name
    this.setState({imageName: fileName})
    let reader = new window.FileReader()
    reader.onloadend = () => {
      this.setState({file: reader.result})
    }
    reader.readAsDataURL(file)
  }

  async onSubmit (e) {
    e.preventDefault()
    console.log(this.state)
    // Get a reference to the storage service
    let storage = firebase.storage()
    // Create a storage reference from our storage service
    let storageRef = storage.ref()
    // Create a image reference
    let fileName = this.state.imageName
    let myPictureRef = storageRef.child(`article-images/${fileName}`) // put the name of the pic
    // online
    let file = this.state.file
    await myPictureRef.putString(file, 'data_url').then((snapshot) => this.setState({ imageDownloadUrl: snapshot.downloadURL })) // uploads the picture and gets the download url

    let title = this.state.title
    let category = this.state.category
    let imageDownloadUrl = this.state.imageDownloadUrl
    let video = this.state.video
    let description = this.state.description
    let shortDescription = this.state.shortDescription
    await writeArticleData(title, category, imageDownloadUrl, description, shortDescription, fileName, video)
    this.setState({
      title: '',
      newCategory: '',
      category: '',
      imageName: '',
      imageDownloadUrl: '',
      video: '',
      shortDescription: '',
      description: '',
      file: ''
    })
  }

  onCategoryAdd (e) { // add Category
    e.preventDefault()
    let categoryToAdd = this.state.newCategory
    let categoryRef = firebase.database().ref('/categories/')
    if (categoryToAdd.length < 3) {
       return toastr.warning('Category name too short, at least 3 letters')
    } else {
      let newCategoryRef = categoryRef.push()
      newCategoryRef.set({name: categoryToAdd})
                         .then(snapshot => toastr.success('Category added'))
                         .then(() => this.setState({newCategory: ''}))
                         .catch(err => toastr.warning(err))
    }
  }
  render () {
    let allCategories = this.props.categories
    let categoriesOptions = []
    for (let category in allCategories) {
      let categoryName = allCategories[category].name
      // Create list with all category options
      categoriesOptions.push(<option key={category}>{categoryName}</option>)
    }
    return (
      <section>
        <div className='wrapper'>
          <MainNav linkColor={'text-dark'} />
          <div className='row d-flex justify-content-center mb-5'>
            <form className='col-12 col-xl-8 col-lg-8 col-md-8 col-sm-8 mt-8' onSubmit={this.onSubmit}>
              <div className='form-group'>
                <label htmlFor='articleTitle'>Article Title</label>
                <input
                  value={this.state.title}
                  onChange={this.onChange}
                  type='text'
                  name='title'
                  className='form-control'
                  id='articleTitle'
                  placeholder='Enter your article title'
                  />
              </div>

              <div className='form-inline'>
                <div className='form-group mr-3 mb-2 p-0 col-9'>
                  <input
                    value={this.state.newCategory}
                    onChange={this.onChange}
                    name='newCategory'
                    type='text'
                    className='form-control col'
                    id='add-new-category'
                    placeholder='Add new category'
                  />
                </div>
                <button onClick={this.onCategoryAdd} className='btn btn-primary mb-2'>
                  Add category
                </button>
              </div>

              <div className='form-group'>
                <label htmlFor='category'>Select category</label>
                <select
                  value={this.state.category}
                  onChange={this.onChange}
                  className='form-control'
                  name='category'
                  id='category'
                >
                  <option selected='selected'> Select a category </option>
                  {categoriesOptions}
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor='articleImage'>Article Image</label>
                <input
                  onChange={this.onChangePicture}
                  type='file'
                  name='image'
                  className='form-control'
                  id='articleImage'
                  placeholder='Enter your image'
                  />
              </div>
              <div className='form-group'>
                <label htmlFor='video'>Article Video</label>
                <input
                  value={this.state.video}
                  onChange={this.onChange}
                  type='text'
                  name='video'
                  className='form-control'
                  id='video'
                  placeholder='Enter your article video'
                  />
              </div>
              <div className='form-group'>
                <label htmlFor='articleText'>Article short description</label>
                <textarea
                  value={this.state.shortDescription}
                  onChange={this.onChange}
                  className='form-control'
                  name='shortDescription'
                  id='articleText'
                  rows='1'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='articleText'>Article text</label>
                <textarea
                  value={this.state.description}
                  onChange={this.onChange}
                  className='form-control'
                  name='description'
                  id='articleText'
                  rows='3'
                />
              </div>
              <button className='btn btn-primary'>Add article</button>
            </form>
          </div>
        </div>
      </section>
    )
  }
}
function mapStateToProps (state) {
  return {
    categories: state.allCategories.categories
  }
}
export default connect(mapStateToProps)(CreatePage)
