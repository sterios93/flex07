import firebase from 'firebase'
import toastr from 'toastr'

export function writeArticleData (title, category, imageDownloadUrl, description, shortDescription, fileName, video) {
  let articlesRef = firebase.database().ref('articles/') // reference to all articles
  let newPostRef = articlesRef.push() // make a reference where to push the new article with a unique key
  newPostRef.set({
    title: title,
    category: category,
    imageDownloadUrl: imageDownloadUrl,
    video: video,
    description: description,
    shortDescription: shortDescription,
    fileName: fileName
  })

  firebase.database().ref('articles/' + title).on('value', (snapshot) => toastr.success('Article saved '))
}
