import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

let Aside = (props) => {
  let allCategories = props.categories
  let categoriesOptions = []
  for (let category in allCategories) {
    let categoryName = allCategories[category].name
    // Create list with all category options without team category
    if (categoryName !== 'Team') {
      categoriesOptions.push(
        <Link to={`/healthy/${categoryName}`} key={category} className='list-group-item list-group-item-action text-center'>
          {categoryName}
        </Link>
      )
    }
  }
  return (
    <div className='list-group list-group-flush w-sm-75 w-100'>
      <Link to={`/healthy/All`} className='list-group-item list-group-item-action text-center'>
        All
      </Link>
      {categoriesOptions}
    </div>
  )
}
function mapStateToProps (state) {
  return {
    categories: state.allCategories.categories
  }
}
export default connect(mapStateToProps)(Aside)
